import React from 'react'
import { useOrder } from '@/app/services/store'
import { createOrder } from '@/app/actions/index.action';
import { orderSchema } from '@/app/schema';
import { toast } from 'react-toastify';
import { OrderItem } from '@/app/types';

interface FormProps {
  total:number,
  order:OrderItem[]
}
export default function Form({order,total}:FormProps) {

  const { cleanOrder } = useOrder();

  const handleCreateOrder = async (formData:FormData) =>{
    const clientName = formData.get('clientName');
    const data = {
      clientName,
      total,
      order
    }

    const result = orderSchema.safeParse(data);
    if(!result.success){
      const message = result.error.issues.forEach((issue)=>{
        toast.error(issue.message)
      });
      return message
    }

    await createOrder(data);
    toast.success('Order placed successfully')
    cleanOrder();
  }

  return (
    <form 
      action={handleCreateOrder}
    >
      <legend className='w-full mt-10 space-y-5'>
        <input
          type='text'
          placeholder='Your name...'
          className='bg-white border border-gray-200 p-2 w-full rounded-md 
          shadow'
          name='clientName'
        />
        <input 
          type="submit" 
          className='py-2 rounded uppercase text-white bg-green-800 hover:bg-green-700 transition-colors ease-in-out w-full text-center cursor-pointer'
          value={'Confirm order'}
        />
        <input 
          type="button" 
          className='py-2 rounded uppercase text-white bg-red-900 hover:bg-red-800 w-full text-center cursor-pointer'
          value={'Cancel order'}
          onClick={()=>cleanOrder()}
        />
      </legend>
    </form>
  )
}
