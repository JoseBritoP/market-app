import { Order, OrderProducts, Product } from "@prisma/client";
import { getProductsWithCategories } from "../api/controllers/product";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
  quantity:number,
  subtotal:number
}

export type OrderWithProducts = Order & {
  orderProducts:(OrderProducts & {
    product:Product
  })[]
}

export type ProductWithCategory = Awaited<ReturnType<typeof getProductsWithCategories>>
