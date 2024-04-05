import { prisma } from "@/app/config/prisma";

export const getOrders = async () => {};

export const getPendingOrders = async () => {
  const orders = await prisma.order.findMany({
    where:{
      status:false
    },
    include:{
      orderProducts:{
        include:{
          product:true
        }
      }
    }
  });

  return orders
};