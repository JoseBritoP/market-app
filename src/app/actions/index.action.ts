"use server";

import { orderSchema } from "../schema";
import { OrderItem } from "../types";
import { createOrderDB } from "../api/controllers/order";
import { revalidatePath } from "next/cache";

interface DataProps {
    clientName: FormDataEntryValue | null;
    total:number,
    order:OrderItem[]
}

export async function createOrder(data:DataProps) {
  const result = orderSchema.safeParse(data);
  if(!result.success){
    return {
      errors:result.error.issues
    }
  };

  try {
    await createOrderDB(result.data);
    revalidatePath('/admin/orders')
    return
  } catch (error) {
    console.log('error',error)
  }
}