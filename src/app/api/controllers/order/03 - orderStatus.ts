import { prisma } from "@/app/config/prisma";

export const orderStatus = async (orderId:FormDataEntryValue) => {
  console.log(orderId)
  if(!orderId || orderId === undefined) throw new Error(`OrderId is required`)

  const orderUpdated = await prisma.order.update({
    where:{
      id:Number(orderId)
    },
    data:{
      status:true,
      orderReadyAt: new Date(Date.now())
    }
  });
  if(!orderUpdated) throw new Error(`An error ocurred completing status of order ${orderId}`)
  return orderUpdated
};