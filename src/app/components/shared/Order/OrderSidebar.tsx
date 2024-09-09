import { getCategories } from "@/app/api/controllers/category"
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";
import { toast } from "react-toastify";

export default async function OrderSidebar() {

  const categories = await getCategories();

  if(!categories.length) return toast.error(`Error getting the categories`)

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo/>
     <nav className="mt-10">
      {categories && categories.map((category)=><CategoryIcon key={category.id} category={category}/>)}
     </nav>
    </aside>
  )
}
