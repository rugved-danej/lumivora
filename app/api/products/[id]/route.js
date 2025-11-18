// app/api/products/[id]/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  try {
    // Await params in Next.js 15+
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const client = await clientPromise;
    const db = client.db('lumivora');
    
    const product = await db.collection('products')
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // **FIX: Serialize MongoDB document properly**
    const serializedProduct = {
      _id: product._id.toString(),
      id: product._id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      imageUrl: product.imageUrl || '',
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    };

    return NextResponse.json({ product: serializedProduct });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}