// app/api/wishlist/route.js
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

// GET - Get user's wishlist
export async function GET(request) {
  try {
    const user = await verifyUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Please login to view wishlist' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db('lumivora');

    // Get user with wishlist
    const userData = await db.collection('users').findOne(
      { _id: new ObjectId(user.userId) },
      { projection: { wishlist: 1 } }
    );

    const wishlistIds = userData?.wishlist || [];

    // Get full product details for wishlist items
    const wishlist = await db.collection('products')
      .find({ _id: { $in: wishlistIds.map(id => new ObjectId(id)) } })
      .toArray();

    return NextResponse.json({ wishlist });

  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch wishlist' },
      { status: 500 }
    );
  }
}

// POST - Add to wishlist
export async function POST(request) {
  try {
    const user = await verifyUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Please login to add to wishlist' },
        { status: 401 }
      );
    }

    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('lumivora');

    // Check if product exists
    const product = await db.collection('products').findOne({
      _id: new ObjectId(productId)
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Add to wishlist (using $addToSet to avoid duplicates)
    await db.collection('users').updateOne(
      { _id: new ObjectId(user.userId) },
      { $addToSet: { wishlist: new ObjectId(productId) } }
    );

    return NextResponse.json({
      message: 'Added to wishlist',
      productId
    });

  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to add to wishlist' },
      { status: 500 }
    );
  }
}

// DELETE - Remove from wishlist
export async function DELETE(request) {
  try {
    const user = await verifyUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Please login to modify wishlist' },
        { status: 401 }
      );
    }

    const { productId } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('lumivora');

    // Remove from wishlist
    await db.collection('users').updateOne(
      { _id: new ObjectId(user.userId) },
      { $pull: { wishlist: new ObjectId(productId) } }
    );

    return NextResponse.json({
      message: 'Removed from wishlist',
      productId
    });

  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return NextResponse.json(
      { error: 'Failed to remove from wishlist' },
      { status: 500 }
    );
  }
}