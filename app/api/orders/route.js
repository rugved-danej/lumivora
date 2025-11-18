import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this'
);

async function verifyUser(request) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

// POST - Create new order
export async function POST(request) {
  try {
    const user = await verifyUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Please login to place an order', requireAuth: true },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const {
      items,
      shippingAddress,
      paymentMethod,
      paymentStatus,
      paymentId,
      total,
      estimatedDelivery
    } = body;
    
    // Validation
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in order' },
        { status: 400 }
      );
    }
    
    if (!shippingAddress) {
      return NextResponse.json(
        { error: 'Shipping address is required' },
        { status: 400 }
      );
    }
    
    if (!paymentMethod || !['cod', 'online'].includes(paymentMethod)) {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db('lumivora');
    
    // Verify products exist and have sufficient stock
    const productIds = items.map(item => new ObjectId(item.productId));
    const products = await db.collection('products')
      .find({ _id: { $in: productIds } })
      .toArray();
    
    // Check stock availability
    for (const item of items) {
      const product = products.find(p => p._id.toString() === item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 404 }
        );
      }
      if (product.stock < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for ${product.name}` },
          { status: 400 }
        );
      }
    }
    
    // Create order
    const order = {
      userId: new ObjectId(user.userId),
      userName: user.name,
      userEmail: user.email,
      items: items.map(item => ({
        productId: new ObjectId(item.productId),
        productName: item.productName,
        quantity: item.quantity,
        price: item.price
      })),
      total: parseFloat(total),
      shippingAddress,
      paymentMethod, // 'cod' or 'online'
      paymentStatus: paymentStatus || 'pending', // 'pending', 'paid', 'failed'
      paymentId: paymentId || null, // Razorpay payment ID if online payment
      status: 'pending', // Order status: 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
      estimatedDelivery: estimatedDelivery || {
        min: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        max: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        text: '5-7 business days'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection('orders').insertOne(order);
    
    // Update product stock
    for (const item of items) {
      await db.collection('products').updateOne(
        { _id: new ObjectId(item.productId) },
        { $inc: { stock: -item.quantity } }
      );
    }
    
    // Update user's orders
    await db.collection('users').updateOne(
      { _id: new ObjectId(user.userId) },
      { $push: { orders: result.insertedId } }
    );
    
    return NextResponse.json(
      {
        message: 'Order placed successfully',
        orderId: result.insertedId.toString()
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

// GET - Get user's orders
export async function GET(request) {
  try {
    const user = await verifyUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Please login to view orders' },
        { status: 401 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db('lumivora');
    
    const orders = await db.collection('orders')
      .find({ userId: new ObjectId(user.userId) })
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ orders });
    
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}