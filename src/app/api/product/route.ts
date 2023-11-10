import { NextResponse } from 'next/server';

import { getSearchParam } from '@/lib/utils';
import { ProductData } from '@/types';

const baseUrl = process.env.FAKE_STORE_URL as string;

export async function GET(request: Request) {
  const id = getSearchParam(request.url, 'id');
  if (!id) return NextResponse.json({ message: 'Product id required' });

  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'GET',
  });

  if (response.ok) {
    const data: ProductData = await response.json();
    return NextResponse.json({ data });
  }
}

export async function POST(request: Request) {
  const newProduct: ProductData = await request.json();

  if (!newProduct.title || !newProduct.description) return NextResponse.error();

  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newProduct),
  });

  if (response.ok) {
    const data = await response.json();
    return NextResponse.json({
      message: `Product ${data.id} added`,
    });
  }
}

export async function PUT(request: Request) {
  const id = getSearchParam(request.url, 'id');
  if (!id) return NextResponse.json({ message: 'Product id required' });

  const updatedProduct: ProductData = await request.json();
  if (!updatedProduct.title || !updatedProduct.description)
    return NextResponse.error();

  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedProduct),
  });

  if (response.ok) {
    const data = await response.json();
    return NextResponse.json({
      message: `Product ${data.id} updated`,
    });
  }
}

export async function DELETE(request: Request) {
  const id = getSearchParam(request.url, 'id');

  if (!id) return NextResponse.json({ message: 'Product id required' });

  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const data = await response.json();
    return NextResponse.json({
      message: data ? `Product ${id} deleted` : `Product ${id} doesn't exist`,
    });
  }
}
