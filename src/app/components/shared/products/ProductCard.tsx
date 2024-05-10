import { formatCurrency, getImagePath } from "@/app/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

interface ProductCardProps {
  product:Product
}
export default function ProductCard({product}:ProductCardProps) {

  const imagePath = getImagePath(product.image)
  // TODO: Fix styles responsive
  return (
    <section className="border bg-gray-100 rounded-md shadow-lg">
      <Image src={imagePath} alt={`Menu ${product.name}`} height={300} width={400} className="object-contain"/>
      <div className="p-5 h-60 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start w-full h-36">
        <h3 className="text-xl font-semibold h-16 text-balance">{product.name}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-500 self-start gap-y-5">{formatCurrency(product.price)}</p>
        </div>
        <AddProductButton product={product}/>
      </div>
    </section>
  )
}
