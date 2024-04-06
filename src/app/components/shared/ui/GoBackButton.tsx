"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
export default function GoBackButton() {
  
  const router = useRouter();

  return (
    <button type='button' onClick={()=>router.back()} className="bg-red-800 hover:bg-red-700 transition-colors ease-in-out text-white w-full mt-5 p-3 rounded-md uppercase font-bold cursor-pointer text-center">Cancel</button>
  )
}
