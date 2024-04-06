import { getProductById } from '@/app/api/controllers/product'
import ProductEditForm from '@/app/components/shared/admin/products/ProductEditForm';
import ProductEditFormC from '@/app/components/shared/admin/products/ProductEditFormC';
import Heading from '@/app/components/shared/ui/Heading';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function ProductEditPage({params}:{params:{productId:string}}) {
  const product = await getProductById(params.productId);
  console.log(product)
  if(!product){
    notFound()
  }
  return (
    <>
      <Heading title={`Edit product: ${product.name}`}/>
      <ProductEditFormC>
        <ProductEditForm product={product}/>
      </ProductEditFormC>
    </>
  )
}
