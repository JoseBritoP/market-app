import { getProductsBySearch } from '@/app/api/controllers/product'
import ProductSearchForm from '@/app/components/shared/admin/products/ProductSearchForm'
import ProductTable from '@/app/components/shared/admin/products/ProductTable'
import Heading from '@/app/components/shared/ui/Heading'
import React from 'react'

interface Props {
  searchParams:{
    search:string
  }
}
export default async function SearchPage({searchParams}:Props) {
  const searchTerm = searchParams.search
  const products = await getProductsBySearch(searchTerm)
  return (
    <>
      <Heading title={`Result of the search: ${searchTerm}`}/>
      <div className='flex flex-col gap-5 lg:flex-row lg:justify-end'>
        <ProductSearchForm/>
      </div>
        <ProductTable products={products}/>
        {!products.length && <p className='mt-10 text-center text-lg'>No results of {searchTerm}</p>}
    </>
  )
}
