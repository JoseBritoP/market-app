import { prisma } from "@/app/config/prisma";

export const getProducts= async(category:string) => {
  const products = await prisma.product.findMany({
    where:{
      category:{
        slug:category
      }
    }
  });

  return products;
};