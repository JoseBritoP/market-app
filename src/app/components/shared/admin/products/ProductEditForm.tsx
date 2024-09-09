import { getCategories } from "@/app/api/controllers/category"
import ImageUpload from "./ImageUpload";
import { Product } from "@prisma/client";
import { toast } from "react-toastify";

interface ProductEditFormProps {
  product?:Product
}
export default async function ProductEditForm({product}:ProductEditFormProps) {

  const categories = await getCategories();

  if(!categories.length) return toast.error(`Error getting the categories`)

  return (
      <>
        <div className="space-y-2">
          <label
              className="text-slate-800"
              htmlFor="name"
          >Name:</label>
          <input
              id="name"
              type="text"
              name="name"
              className="block w-full p-3 bg-slate-100 rounded-md"
              placeholder="Product name..."
              defaultValue={product?.name}
          />
        </div>
        <div className="space-y-2">
          <label
              className="text-slate-800"
              htmlFor="price"
          >Price:</label>
          <input
            type="number"
              id="price"
              name="price"
              className="block w-full p-3 bg-slate-100 rounded-md"
              placeholder="Product price"
              defaultValue={product?.price}
          />
        </div>
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="categoryId">Category:</label>
          <select
              className="block w-full p-3 bg-slate-100 rounded-md"
              id="categoryId"
              name="categoryId"
              defaultValue={product?.categoryId}
          >
              <option value="">-- Select --</option>
              {categories && categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
        </div>
        <ImageUpload image={product?.image}/>
    </>
  )
}