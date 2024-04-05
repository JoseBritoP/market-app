import { formatCurrency } from "@/app/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

interface ProductCardProps {
  product:Product
}
export default function ProductCard({product}:ProductCardProps) {
  // TODO: Fix styles responsive
  return (
    <div className="border bg-white rounded-md">
      <Image src={`/products/${product.image}.jpg`} alt={`Menu ${product.name}`} height={300} width={400} className="object-contain"/>
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-500">{formatCurrency(product.price)}</p>
        <AddProductButton product={product}/>
      </div>
    </div>
  )
}
