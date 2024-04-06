"use client"

import { updateProduct } from "@/app/actions/update-product-action";
import { ProductSchema } from "@/app/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import GoBackButton from "../../ui/GoBackButton";
import { useParams } from "next/navigation";

export default function ProductEditFormC({children}:{children:React.ReactNode}) {

  const router = useRouter();
  const params = useParams();
  const productId = params.productId!
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

    const response = await updateProduct(result.data,+productId);
    //@ts-ignore
    if(response?.errors){
      //@ts-ignore
      response.errors.forEach((issue)=>{
        toast.error(issue.message)
      })
      return
    };

    toast.success('Product was updated successfully!')
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
          <GoBackButton/>
        </div>
      </form>
    </div>
  )
}
