import { useStore } from "@/app/services/store"
import { OrderItem } from "@/app/types"
import { formatCurrency } from "@/app/utils"
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useMemo } from "react"

interface ProductDetailsOrderProps {
  item:OrderItem
}

const MIN_ITEM = 1;
const MAX_ITEM = 15

export default function ProductDetailsOrder({ item }:ProductDetailsOrderProps) {

  const { increaseQuantity, decreaseQuantity } = useStore();

  const disabledDecreaseButton = useMemo(()=>item.quantity === MIN_ITEM,[item])
  const disabledIncreaseButton = useMemo(()=>item.quantity === MAX_ITEM,[item])

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
            <p className="text-xl font-semibold">{item.name} </p>
            <button
              type="button"
              onClick={() => {}}
            >
              <XCircleIcon className="text-red-600 h-8 w-8"/>
            </button>
        </div>
        <p className="text-2xl text-amber-500 font-bold">
            {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
            <button
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              disabled={disabledDecreaseButton}
              className="disabled:opacity-20"
            >
                <MinusIcon className="h-6 w-6"/>
            </button>

            <p className="text-lg font-black ">
              {item.quantity}
            </p>

            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              disabled={disabledIncreaseButton}
              className="disabled:opacity-20"
            >
                <PlusIcon className="h-6 w-6"/>
            </button>
        </div>
        <p className="text-xl font-bold text-gray-700">
            Subtotal: {''}
            <span className="font-normal"> 
              {formatCurrency(item.subtotal)}
            </span>
        </p>
      </div>
    </div>
  )
}
