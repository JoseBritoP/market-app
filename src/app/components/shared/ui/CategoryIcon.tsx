"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
  category:Category
}
export default function CategoryIcon({category}:CategoryIconProps) {
  const params = useParams<{category:string}>();
  console.log(params)
  return (
    // <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
    //   <div className="w-16 h-16 relative">
    //     <Image src={`/icon_${category.slug}.svg`} alt={`${category.name}`}
    //     fill
    //     />
    //   </div>
    //   <Link href={`/order/${category.slug}`} className="text-xl font-semibold">{category.name}</Link>
    // </div>
    <Link href={`/order/${category.slug}`} className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b hover:bg-slate-200 hover:text-black 
    ${category.slug === params.category ? 'bg-amber-500 text-white' : ''}
    `}>
      <div className="w-16 h-16 relative">
        <Image src={`/icon_${category.slug}.svg`} alt={`${category.name}`}
        fill
        />
      </div>
      <p className="text-xl font-semibold">{category.name}</p>
    </Link>
  )
}
