"use server"
import { revalidatePath } from "next/cache";

import { orderCancelStatus } from "../api/controllers/order"

export async function cancelOrder(formData:FormData) {
  const orderId = formData.get('order_id');
  if(!orderId) return;

  try {
    await orderCancelStatus(orderId);
    revalidatePath('/admin/orders')
    revalidatePath('/orders')
    return
  } catch (error) {
    console.log('Error completing order status',error)
  }
}