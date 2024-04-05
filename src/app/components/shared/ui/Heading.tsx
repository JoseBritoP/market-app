import React from 'react'

export default function Heading({title}:{title:string}) {
  return (
    <h1 className='text-2xl my-10 font-semibold'>
      {title}
    </h1>
  )
}
