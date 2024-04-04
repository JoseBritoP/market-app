"use client"
import React from 'react'
import { useStore } from '@/app/services/store';
import ProductDetailsOrder from './ProductDetailsOrder';
export default function OrderSummary() {

  const { order } = useStore();
  return (
    <aside className='lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5'>
      <h1 className='text-2xl text-center font-semibold'>My order</h1>
      {!order.length ?  <p className='text-center my-10'>The cart is empty</p> 
      : (
      <div className='mt-5'>
        {order.map((item)=>(<ProductDetailsOrder key={item.id} item={item}/>))}
      </div>
      )}
    </aside>
  )
}
