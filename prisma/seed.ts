import { products } from "./data/products";
import { categories } from "./data/categories";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()


async function main(){
  try {
    await prisma.category.createMany({
      data:categories
    });
    await prisma.product.createMany({
      data:products
    })
  } catch (error) {
    console.log('Error',error)
  }
}

main()
.then(async()=>{
  await prisma.$disconnect();
  process.exit(0)
})
.catch((async(e)=>{
  console.log('error main',e);
  await prisma.$disconnect();
  process.exit(1)
}))