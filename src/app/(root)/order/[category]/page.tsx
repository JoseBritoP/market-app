import Heading from '@/app/components/shared/ui/Heading'
import ProductCard from '@/app/components/shared/products/ProductCard'
import { getProducts } from '@/app/api/controllers/product'

export default async function OrderPage({params}:{params:{category:string}}) {
  const products = await getProducts(params.category)
  // TODO : Styles
  
  return (
    <section>
      <Heading title='Choose and customize your order below'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-center'>
        {products.map((product)=>(<ProductCard key={product.id} product={product}/>))}
      </div>
    </section> 
  )
}
