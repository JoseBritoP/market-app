import { prisma } from "@/app/config/prisma";
import { OrderItem } from "@/app/types";
interface DataProps {
  clientName: string;
  total:number,
  order:OrderItem[]
}

export const createOrderDB = async ({clientName,order,total}:DataProps) => {

  const newOrder = await prisma.order.create({
    data:{
      clientName,
      total,
      orderProducts:{
        create: order.map((product)=>({
          productId:product.id,
          quantity:product.quantity
        }))

      }
    }
  })

  if(!newOrder) throw new Error(`An error ocurred...`)

  return newOrder
};