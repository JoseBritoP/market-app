import React from 'react'
import { OrderWithProducts } from '@/app/types'
import { formatCurrency } from '@/app/utils'
import { completeOrder } from '@/app/actions/completeOrder.action.'
import OrderForm from '../SubComponents/OrderForm'

interface OrderCardProps {
  order:OrderWithProducts
}
export default function OrderCard({order}:OrderCardProps) {
  const { clientName, date, id, orderProducts, orderReadyAt, status, total } = order
  return (
    <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4">
      <p className='text-2xl font-medium text-gray-900'>Client: <span>{clientName}</span> </p>
      <p className='text-lg font-medium text-gray-900'>Order Products:</p>
      {/*  */}
      <dl className="mt-6 space-y-4">
        {orderProducts.map((product)=>(
          <div key={product.id} className='flex items-center gap-2 border-t border-gray-200 pt-4'>
            <dt className='flex items-center text-sm text-gray-600'>
              <span className='font-black'>({' '} {product.quantity} {' '})</span>
            </dt>
            <dd className='text-sm font-medium text-gray-900'>{product.product.name}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Total:</dt>
          <dd className="text-base font-medium text-gray-900">{formatCurrency(total)}</dd>
        </div>
      </dl>
      <OrderForm orderId={order.id}/>
    </section>
  )
}
