import Link from 'next/link'
import React from 'react'

interface ProductsPaginationProps {
  page:number
  totalPages:number
}

export default function ProductsPagination({page,totalPages}:ProductsPaginationProps) {
  const disabledLeft = page > 1;
  const disabledRight = page < totalPages;
  return (
    <nav className='flex justify-center py-10'>
        <Link href={`/admin/products?page=${1}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledLeft}
          >
            {`<<`}
          </button>
        </Link>
        <Link href={`/admin/products?page=${page-1}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledLeft}
          >
            &laquo;
          </button>
        </Link>
        <Link href={`/admin/products?page=${page+1}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledRight}
          >
            &raquo;
          </button>
        </Link>
        <Link href={`/admin/products?page=${totalPages}`}>
          <button
          className='disabled:opacity-70 disabled:bg-gray-300 border bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 '
          disabled={!disabledRight}
          >
            {`>>`}
          </button>
        </Link>
    </nav>
  )
}
