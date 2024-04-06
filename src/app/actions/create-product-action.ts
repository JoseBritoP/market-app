"use server"

import { revalidatePath } from "next/cache";
import { createProductDB } from "../api/controllers/product";
import { ProductSchema } from "../schema"

export async function createProduct(data:unknown) {
  const result = ProductSchema.safeParse(data);
  
  if(!result.success){
    return {
      errors:result.error.issues
    }
  };

  try {

    const product = await createProductDB(result.data);
    revalidatePath(`/order/${product.category.name}`);
    return
  } catch (error) {
    console.log('Error createProduct',error)
  }
}