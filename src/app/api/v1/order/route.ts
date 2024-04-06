import { NextResponse as res,NextRequest } from "next/server";
import { getPendingOrders } from "../../controllers/order";

export async function GET() {
  try {
    const orders = await getPendingOrders();
    return res.json(orders)
  } catch (error:any) {
    return res.json({error:error.message})
  }
}