// app/api/products/route.js - Public product listing
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const client = await clientPromise;
    const db = client.db('lumivora');
    
    const filter = category ? { category } : {};
    
    const products = await db.collection('products')
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    // **FIX: Serialize all products**
    const serializedProducts = products.map(product => ({
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
    }));

    return NextResponse.json({ products: serializedProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}