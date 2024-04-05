"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function OrderPage() {
  const router = useRouter();

  useEffect(()=>{
    router.push('/order/coffee')
  },[router])
  return (
    <div>
      
    </div>
  )
}
