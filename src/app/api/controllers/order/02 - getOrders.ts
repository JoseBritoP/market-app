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

export const getReadyOrders = async () => {
  const orders = await prisma.order.findMany({
    take:5,
    where:{
      orderReadyAt:{
        not:null
      }
    },
    orderBy:{
      orderReadyAt:'desc'
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
}

export const getCancelOrders = async () => {
  const orders = await prisma.order.findMany({
    take:5,
    where:{
      orderCancelAt:{
        not:null
      }
    },
    orderBy:{
      orderCancelAt:'desc'
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
}