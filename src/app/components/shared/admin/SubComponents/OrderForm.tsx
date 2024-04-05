import { completeOrder } from '@/app/actions/completeOrder.action.'

interface Props {
  orderId:number
}
export default function OrderForm({orderId}:Props) {
  return (
    <form action={completeOrder}>
      <input type='hidden' value={orderId} name='order_id'/>
      <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value='Marcar Orden Completada'
      />
    </form>
  )
}
