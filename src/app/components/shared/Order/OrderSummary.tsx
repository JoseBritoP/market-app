"use client"
import React, { useMemo } from 'react'
import { useStore } from '@/app/services/store';
import ProductDetailsOrder from './ProductDetailsOrder';
import { formatCurrency } from '@/app/utils';
export default function OrderSummary() {

  const { order } = useStore();
  const  total = useMemo(()=>(order.reduce((total,item)=>total+(item.quantity*item.price),0)),[order])
  return (
    <aside className='lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5'>
      <h1 className='text-2xl text-center font-semibold'>My order</h1>
      {!order.length ?  <p className='text-center my-10'>The cart is empty</p> 
      : (
      <div className='mt-5 flex flex-col gap-y-2'>
        {order.map((item)=>(<ProductDetailsOrder key={item.id} item={item}/>))}
        <p className='text-2xl mt-8 text-center p-2 bg-white rounded-md border shadow'>Total: <span className='font-semibold'>{formatCurrency(total)}</span></p>
      </div>
      )}
    </aside>
  )
}
