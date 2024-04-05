import { getPendingOrders } from '@/app/api/controllers/order'
import OrderCard from '@/app/components/shared/admin/orders/OrderCard';
import Heading from '@/app/components/shared/ui/Heading'
import React from 'react'

export default async function AdminOrdersPage() {
  const orders = await getPendingOrders();
  return (
    <div>
      <Heading title='Manage orders'/>
      { orders ? 
        (
          <div className='gird grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            {orders.map((order)=>(<OrderCard key={order.id} order={order}/>))}
          </div>
        ) 
        : <p>No orders</p>
      }
    </div>
  )
}
