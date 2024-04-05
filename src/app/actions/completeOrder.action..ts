"use server"

import { orderStatus } from "../api/controllers/order"

export async function completeOrder(formData:FormData) {
  const orderId = formData.get('order_id');
  if(!orderId) return;

  try {
    await orderStatus(orderId);
  } catch (error) {
    console.log('Error completing order status',error)
  }
}