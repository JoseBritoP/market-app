import { getCategories } from "@/app/api/controllers/category"
import ImageUpload from "./ImageUpload";

export default async function ProductEditForm() {

  const categories = await getCategories();

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
              className="block w-full p-3 bg-slate-100"
              placeholder="Product name..."
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
              className="block w-full p-3 bg-slate-100"
              placeholder="Product price"
          />
        </div>
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="categoryId">Category:</label>
          <select
              className="block w-full p-3 bg-slate-100"
              id="categoryId"
              name="categoryId"
          >
              <option value="">-- Select --</option>
              {categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
          </select>
        </div>
        <ImageUpload/>
    </>
  )
}