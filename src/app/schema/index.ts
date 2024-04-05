import z from 'zod';

const itemSchema = z.object({
  id:z.number(),
  name:z.string(),
  price:z.number(),
  quantity:z.number(),
  subtotal:z.number()
})

export const orderSchema = z.object({
  clientName:z.string().min(1,"Your name is required"),
  total:z.number().min(1,'There are errors in the order'),
  order:z.array(itemSchema)
})

export const SearchSchema = z.object({
  search:z.string().trim().min(1,{message:'The search is not valid'})
})