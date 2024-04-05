import z from 'zod';

export const orderSchema = z.object({
  clientName:z.string().min(1,"Your name is required"),
})