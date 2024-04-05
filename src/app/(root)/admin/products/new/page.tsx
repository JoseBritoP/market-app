import ProductEditForm from '@/app/components/shared/admin/products/ProductEditForm'
import ProductForm from '@/app/components/shared/admin/products/ProductForm'
import Heading from '@/app/components/shared/ui/Heading'
import React from 'react'

export default function NewProductPage() {
  return (
    <section>
      <Heading title='New Product'/>
      <ProductForm>
        <ProductEditForm/>
      </ProductForm>
    </section>
  )
}
