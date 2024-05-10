"use client"

import { useOrder } from "@/app/services/store"
import { Product } from "@prisma/client"

interface AddProductButtonProps {
  product:Product
}

export default function AddProductButton({product}:AddProductButtonProps) {

  const { addToOrder } = useOrder();

  return (
    <button aria-label="Agree product to cart" className="bg-sky-600 hover:bg-sky-700 transition-colors duration-300 ease-in-out text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      onClick={()=>addToOrder(product)}
    >Agree</button>
  )
}
