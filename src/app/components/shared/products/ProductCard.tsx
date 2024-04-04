import { formatCurrency } from "@/app/utils"
import { Product } from "@prisma/client"
import Image from "next/image"

interface ProductCardProps {
  product:Product
}
export default function ProductCard({product}:ProductCardProps) {
  return (
    <div className="border bg-white rounded-md">
      <Image src={`/products/${product.image}.jpg`} alt={`Menu ${product.name}`} height={300} width={400} className="object-contain"/>
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-500">{formatCurrency(product.price)}</p>
        <button className="bg-sky-600 hover:bg-sky-700 transition-colors 300 ease-in-out text-white w-full mt-5 p-3 uppercase font-semibold cursor-pointer">Agree</button>
      </div>
    </div>
  )
}
