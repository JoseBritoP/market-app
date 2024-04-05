import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='flex justify-center mt-2'>
      <div className='relative w-full h-32'>
        <Image fill alt={'Logo - Fresh Coffe'} src={'/logo.svg'}/>
      </div>
    </div>
  )
}
