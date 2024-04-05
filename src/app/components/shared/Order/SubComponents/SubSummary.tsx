"use client"
import React, { useMemo } from 'react'
import ProductDetailsOrder from '../ProductDetailsOrder'
import { formatCurrency } from '@/app/utils'
import { useOrder } from '@/app/services/store'
import Form from './Form'

export default function SubSummary() {
  const { order } = useOrder();
  const total = useMemo(()=>(order.reduce((total,item)=>total+(item.quantity*item.price),0)),[order])
  return (
    <>
      {!order.length ?  <p className='text-center my-10'>The cart is empty</p> 
      : (
      <div className='mt-5 flex flex-col gap-y-2'>
        {order.map((item)=>(<ProductDetailsOrder key={item.id} item={item}/>))}
        <p className='text-2xl mt-8 text-center p-2 bg-white rounded-md border shadow'>Total: <span className='font-semibold'>{formatCurrency(total)}</span></p>
        <Form total={total} order={order}/>
      </div>
      )}
    </>
  )
}
