import Heading from '@/app/components/shared/ui/Heading'
import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <div className='text-center'>
      <Heading title='Product not found'/>
      <Link href={'/admin/products'} className='bg-amber-300 hover:bg-amber-400 transition-all ease-in-out shadow-md shadow-amber-200 text-white  px-10 py-3 text-xl text-center cursor-pointer font-bold w-full lg:w-auto rounded-md'>Go products</Link>
    </div>
  )
}
