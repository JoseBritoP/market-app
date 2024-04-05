import Link from 'next/link'
import React from 'react'

interface ProductsPaginationProps {
  page:number
  totalPages:number
}

export default function ProductsPagination({page,totalPages}:ProductsPaginationProps) {
  const disabledLeft = page > 1;
  const disabledRight = page < totalPages;
  const pages = Array.from({length:totalPages},(_,i)=>i+1)
  return (
    <nav className='flex justify-center py-10'>
        <Link href={`/admin/products?page=${page-1}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 rounded-md border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledLeft}
          >
            &laquo;
          </button>
        </Link>
        {pages.map((currentPage)=>(
          <Link key={currentPage} href={`/admin/products?page=${currentPage}`}>
            <button
              className={`${page === currentPage ? 'font-black bg-gray-200' : 'bg-white'} rounded-md border  px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
            >
              {currentPage}
            </button>
            </Link>
        ))}
        <Link href={`/admin/products?page=${page+1}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 rounded-md border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledRight}
          >
            &raquo;
          </button>
        </Link>
    </nav>
  )
}
