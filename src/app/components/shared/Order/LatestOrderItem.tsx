import { OrderWithProducts } from '@/app/types'
import React from 'react'

interface LatestOrderItemProps {
  order:OrderWithProducts
}

export default function LatestOrderItem({order}:LatestOrderItemProps) {
  return (
    <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
      <p className='text-2xl font-bold text-slate-600'>Client: <span className='font-semibold'>{order.clientName}</span></p>
      <ul role='list' className='divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500'>
        {order.orderProducts.map((product)=>(
          <li key={product.id}>
            <p><span className='font-black'>{`(${product.quantity})`}</span>{'  '}{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
