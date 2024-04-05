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

export const getProductsWithCategories = async (page:number,pageSize:number) =>{

  const skip = (page-1) * pageSize

  const products = await prisma.product.findMany({
    take:pageSize,
    skip,
    include:{
      category:true
    }
  });
  return products;
}

export const getProductsTotal = async () => {
  return await prisma.product.count();
};