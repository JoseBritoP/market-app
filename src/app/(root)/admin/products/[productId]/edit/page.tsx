import { getProductById } from '@/app/api/controllers/product'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function ProductEditPage({params}:{params:{productId:string}}) {
  const product = await getProductById(params.productId);
  console.log(product)
  if(!product){
    notFound()
  }
  return (
    <div>
      Page
    </div>
  )
}
