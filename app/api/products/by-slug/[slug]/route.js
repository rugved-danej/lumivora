import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

function slugify(text) {
  if (!text) return ''
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^ws-]/g, '')
    .replace(/s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function GET(request, { params }) {
  try {
    // Await the params promise in Next.js 15+
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    const client = await clientPromise;
    const db = client.db('lumivora');
    
    // Get all products and find the one with matching slug
    const products = await db.collection('products').find({}).toArray();
    
    const product = products.find(p => slugify(p.name) === slug);
    
    if (!product) {
      // Return available slugs for debugging
      const availableSlugs = products.map(p => slugify(p.name));
      
      return NextResponse.json(
        { 
          error: 'Product not found',
          availableSlugs 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}