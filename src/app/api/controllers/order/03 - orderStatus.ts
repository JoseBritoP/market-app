import { prisma } from "@/app/config/prisma";

export const orderStatus = async (orderId:FormDataEntryValue) => {
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

export const orderCompleteStatus = async (orderId:FormDataEntryValue) => {
  if(!orderId || orderId === undefined) throw new Error(`OrderId is required`)

  const orderUpdated = await prisma.order.update({
    where:{
      id:Number(orderId)
    },
    data:{
      status:true,
      completed:true,
      orderReadyAt: new Date(Date.now())
    }
  });
  if(!orderUpdated) throw new Error(`An error ocurred completing status of order ${orderId}`)
  return orderUpdated
};

export const orderCancelStatus = async (orderId:FormDataEntryValue) => {
  if(!orderId || orderId === undefined) throw new Error(`OrderId is required`)

  const orderUpdated = await prisma.order.update({
    where:{
      id:Number(orderId)
    },
    data:{
      status:true,
      canceled:true,
      orderCancelAt: new Date(Date.now())
    }
  });
  if(!orderUpdated) throw new Error(`An error ocurred canceling status of order ${orderId}`)
  return orderUpdated
};

