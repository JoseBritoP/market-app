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

export const getProductsBySearch = async( searchTerm:string) => {

  const products = await prisma.product.findMany({
    where:{
      name:{
        contains:searchTerm,
        mode:'insensitive'
      }
    },
    include:{
      category:true
    }
  });

  return products
};

export const getProductById = async (productId:string) => {
  const product = await prisma.product.findUnique({
    where:{
      id:+productId
    },
    include:{
      category:true
    }
  });

  return product
}