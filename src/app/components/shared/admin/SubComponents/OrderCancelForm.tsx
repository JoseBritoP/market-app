import { cancelOrder } from "@/app/actions/cancelOrder.action"

interface Props {
  orderId:number
}
export default function OrderCancelForm({orderId}:Props) {
  return (
    <form action={cancelOrder}>
      <input type='hidden' value={orderId} name='order_id'/>
      <input
          type="submit"
          className="rounded-md bg-red-700 hover:bg-reed-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value='Cancel order'
      />
    </form>
  )
}
