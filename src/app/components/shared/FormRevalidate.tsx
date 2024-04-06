import { revalidatePath } from 'next/cache'

export default function FormRevalidate() {

  const handleSubmit = async () => {
    "use server"
    revalidatePath('/orders')
  }
  return (
    <form action={handleSubmit}
    className='self-center'
    >
      <button className='bg-sky-700 hover:bg-sky-600 transition-colors ease-in-out mt-5  rounded-md text-white px-6 py-2 '>Update</button>
    </form>
  )
}
