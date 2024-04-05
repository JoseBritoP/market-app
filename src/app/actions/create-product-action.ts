"use server"

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

    return await createProductDB(result.data);
    
  } catch (error) {
    console.log('Error createProduct',error)
  }
}