import React from 'react'
import { getCancelOrders, getReadyOrders } from '@/app/api/controllers/order'
import LatestOrderItem from '@/app/components/shared/Order/LatestOrderItem';
import Logo from '@/app/components/shared/ui/Logo'
import FormRevalidate from '@/app/components/shared/FormRevalidate';

export default async function OrdersPage() {

  const orders = await getReadyOrders();
  const canceledOrders = await getCancelOrders();

  return (
    <section className='flex flex-col w-full px-10'>
      <Logo/>
      <div className='grid grid-cols-1 sm:grid-cols-2 bg-slate-300 mt-6 rounded-md'>

        <div className='flex flex-col rounded-md pb-6'>
          <p className='text-center text-gray-600 mt-10 font-semibold text-xl'>Latest complete orders</p>
          <FormRevalidate path/>
          {!orders.length ? (<p className='text-center my-10 font-semibold'>No orders</p>) : (
            <div className='grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10'>
              {orders.map((order)=>(<LatestOrderItem key={order.id} order={order}/>))}
            </div>
          )
        }
        </div>
        <div className='flex flex-col'>
          <p className='text-center text-gray-600 mt-10 font-semibold text-xl'>Latest cancel orders</p>
          <FormRevalidate/>
          { canceledOrders.length === 0 ? (<p className='text-center my-10 font-semibold'>No orders canceled</p>) : (
            <div className='grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10'>
              {canceledOrders.map((order)=>(<LatestOrderItem key={order.id} order={order}/>))}
            </div>
          )
        }
        </div>
      </div>
    </section>
  )
}
