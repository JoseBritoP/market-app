import React from 'react'
import Heading from '@/app/components/shared/ui/Heading'
import { getProductsTotal, getProductsWithCategories } from '@/app/api/controllers/product'
import ProductTable from '@/app/components/shared/admin/products/ProductTable';
import ProductsPagination from '@/app/components/shared/admin/products/ProductsPagination';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import ProductSearchForm from '@/app/components/shared/admin/products/ProductSearchForm';


export default async function ProductPage({searchParams}:{searchParams:{page:string}}) {
  const page = +searchParams.page || 1;
  const pageSize = 10;
  if(page < 0) redirect('/admin/products?page=1')
  const productsData =  getProductsWithCategories(page,pageSize);
  const totalProductsData = getProductsTotal();
  const [products,totalProducts] = await Promise.all([productsData,totalProductsData])
  const totalPages = Math.ceil(totalProducts/pageSize);
  if(page > totalPages) redirect('/admin/products?page=1')

  return (
    <section>
      <Heading title='Manage Products'/>
      <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
        <Link className='bg-amber-400 w-full lg:w-auto text-xl px-10 rounded-md text-white hover:bg-amber-500 transition-colors ease-in-out py-3 text-center font-semibold' href={'/admin/products/new'}>Create Product</Link>
        <ProductSearchForm/>
      </div>
      <ProductTable products={products}/>
      <ProductsPagination page={page} totalPages={totalPages}/>
    </section>
  )
}
