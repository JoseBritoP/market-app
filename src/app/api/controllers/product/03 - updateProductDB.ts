import { prisma } from "@/app/config/prisma";

interface Props {
  name:string
  price:number
  categoryId:number
  image:string
}

export const updateProductDB = async ({categoryId,image,name,price}:Props,id:number) => {
  const updatedProduct = await prisma.product.update({
    where:{
      id
    },
    data:{
      image,name,price,categoryId
    },
    include:{
      category:true
    }
  });

  if(!updatedProduct) throw new Error('An error has ocurred updating the product')
  return updatedProduct

};