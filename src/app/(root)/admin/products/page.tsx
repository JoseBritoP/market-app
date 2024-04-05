import React from 'react'
import Heading from '@/app/components/shared/ui/Heading'
import { getProductsTotal, getProductsWithCategories } from '@/app/api/controllers/product'
import ProductTable from '@/app/components/shared/admin/products/ProductTable';
import ProductsPagination from '@/app/components/shared/admin/products/ProductsPagination';


export default async function ProductPage({searchParams}:{searchParams:{page:string}}) {
  const page = +searchParams.page || 1;
  const pageSize = 10;
  const productsData =  getProductsWithCategories(page,pageSize);
  const totalProductsData = getProductsTotal();
  const [products,totalProducts] = await Promise.all([productsData,totalProductsData])
  const totalPages = Math.ceil(totalProducts/pageSize);

  return (
    <section>
      <Heading title='Manage Products'/>
      <ProductTable products={products}/>
      <ProductsPagination page={page} totalPages={totalPages}/>
    </section>
  )
}
