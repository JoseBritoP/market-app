import { getPendingOrders } from '@/app/api/controllers/order'
import FormRevalidate from '@/app/components/shared/FormRevalidate';
import OrderCard from '@/app/components/shared/admin/orders/OrderCard';
import Heading from '@/app/components/shared/ui/Heading'
import React from 'react'

export default async function AdminOrdersPage() {
  const orders = await getPendingOrders();
  return (
    <div>
      <Heading title='Manage orders'/>
      <FormRevalidate/>
      { orders &&
        (
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            {orders.map((order)=>(<OrderCard key={order.id} order={order}/>))}
          </div>
        ) 
      }
      {!orders.length && <p className='text-slate-700 text-xl font-medium'>No orders pending...</p>}
    </div>
  )
}
