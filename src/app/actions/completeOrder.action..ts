"use server"
import { revalidatePath } from "next/cache";

import { orderStatus,orderCompleteStatus } from "../api/controllers/order"

export async function completeOrder(formData:FormData) {
  const orderId = formData.get('order_id');
  if(!orderId) return;

  try {
    await orderCompleteStatus(orderId);
    revalidatePath('/admin/orders')
    revalidatePath('/orders')
    return
  } catch (error) {
    console.log('Error completing order status',error)
  }
}