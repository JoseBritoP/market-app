import { getPendingOrders } from '@/app/api/controllers/order'
import Heading from '@/app/components/shared/ui/Heading'
import React from 'react'

export default async function AdminOrdersPage() {
  const orders = await getPendingOrders();
  return (
    <div>
      <Heading title='Manage orders'/>
    </div>
  )
}
