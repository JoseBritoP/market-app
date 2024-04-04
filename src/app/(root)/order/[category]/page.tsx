import { getProducts } from '@/app/api/controllers/product'
import Order from '@/app/components/shared/Order/Order'
import ProductCard from '@/app/components/shared/products/ProductCard'

export default async function OrderPage({params}:{params:{category:string}}) {
  const products = await getProducts(params.category)
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-center'>
        {products.map((product)=>(<ProductCard key={product.id} product={product}/>))}
      </div>
    </div> 
  )
}
