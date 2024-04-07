import { completeOrder } from '@/app/actions/completeOrder.action.'

interface Props {
  orderId:number
}
export default function OrderCompleteForm({orderId}:Props) {
  return (
    <form action={completeOrder}>
      <input type='hidden' value={orderId} name='order_id'/>
      <input
          type="submit"
          className="rounded-md bg-green-700 hover:bg-green-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value='Complete order'
      />
    </form>
  )
}
