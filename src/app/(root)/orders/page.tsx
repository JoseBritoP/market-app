import React from 'react'
import { getReadyOrders } from '@/app/api/controllers/order'
import LatestOrderItem from '@/app/components/shared/Order/LatestOrderItem';
import Logo from '@/app/components/shared/ui/Logo'

export default async function OrdersPage() {

  const orders = await getReadyOrders();
  return (
    <section className='flex flex-col w-full px-10'>
      <h1 className='text-4xl font-bold mt-10 text-center'>Ready Orders</h1>
      <Logo/>
      <p className='text-center text-gray-600 mt-10 font-semibold text-xl'>Latest orders</p>
      {!orders.length ? (<p className='text-center my-10 font-semibold'>No orders</p>) : (
        <div className='grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10'>
          {orders.map((order)=>(<LatestOrderItem key={order.id} order={order}/>))}
        </div>
      )
      }
    </section>
  )
}
