"use server"

import { updateProductDB } from "../api/controllers/product";
import { ProductSchema } from "../schema"
import { revalidatePath } from "next/cache";

export async function updateProduct(data:unknown,productId:number) {

  const result = ProductSchema.safeParse(data);
  
  if(!result.success){
    return {
      errors:result.error.issues
    }
  };

  try {
     const product = await updateProductDB(result.data,productId);
     console.log(product.category.name)
     revalidatePath('/admin/products')
     revalidatePath(`/order/${product.category.name}`)
     return
    } catch (error) {
    console.log('Error updateProduct',error)
  }
}