import { prisma } from "@/app/config/prisma";

interface Props {
  name:string
  price:number
  categoryId:number
  image:string
}
export const createProductDB = async ({categoryId,image,name,price}:Props) => {
  const newProduct = await prisma.product.create({
    data:{
      image,name,price,categoryId
    }
  });

  if(!newProduct) throw new Error('An error has ocurred creating the product')
  return newProduct
};