"use client"

import { createProduct } from "@/app/actions/create-product-action";
import { ProductSchema } from "@/app/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductEditFormC({children}:{children:React.ReactNode}) {

  const router = useRouter();

  const handleSubmit = async (formData:FormData) => {
    const name = formData.get('name');
    const price = formData.get('price');
    const categoryId = formData.get('categoryId');
    const image = formData.get('image')
    const data = {
      name,
      price,
      categoryId,
      image
    }

    const result = ProductSchema.safeParse(data);
    console.log(result)
    if(!result.success){
      result.error.issues.forEach((issue)=>{
        console.log(issue.message)
        toast.error(issue.message)
      })
      return
    };
    const response = await createProduct(result.data);
    //@ts-ignore
    if(response?.errors){
      //@ts-ignore
      response.errors.forEach((issue)=>{
        toast.error(issue.message)
      })
      return
    };

    toast.success('Product was created successfully!')
    router.push('/admin/products')
  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <div className="flex gap-x-5 justify-between items-center">
          <input type="submit"
            value={`Save changes`}
            className="bg-green-700 hover:bg-green-600 text-white w-full mt-5 rounded-md p-3 uppercase font-bold cursor-pointer"
            />
          <Link 
            href={'/admin/products'}
            className="bg-red-800 hover:bg-red-700 transition-colors ease-in-out text-white w-full mt-5 p-3 rounded-md uppercase font-bold cursor-pointer text-center"
          >Cancel</Link>
        </div>
      </form>
    </div>
  )
}
