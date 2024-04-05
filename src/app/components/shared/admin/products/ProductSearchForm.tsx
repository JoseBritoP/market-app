"use client"
import React from 'react'
import { SearchSchema } from '@/app/schema';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function ProductSearchForm() {

  const router = useRouter();

  const handleSearchForm = (formData:FormData) => {
    const search = formData.get('search');
    const data = {
      search
    }
    const result = SearchSchema.safeParse(data)
    console.log(result)
    if(!result.success) return result.error.issues.forEach((issue)=>toast.error(issue.message))
      router.push(`/admin/products/search?search=${result.data.search}`)
  };

  return (
    <form className='flex items-center' action={handleSearchForm}>
      <input type="text"
        placeholder='Search product...'
        className='p-2 placeholder-gray-400 w-full rounded-md border-2'
        name="search" id="search" />
      <input
        type='submit'
        value={'Search'}
        className='bg-sky-600 hover:bg-sky-700 transition-colors ease-in-out p-2 uppercase text-white cursor-pointer rounded-md rounded-l-none '
      />
    </form>
  )
}
