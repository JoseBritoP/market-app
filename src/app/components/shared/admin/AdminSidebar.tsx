import React from 'react'
import Logo from '../ui/Logo'
import AdminRoute from './AdminRoute'

const adminNavigation = [
  {url: '/admin/orders', text: 'Orders', blank: false},
  {url: '/admin/products', text: 'Products', blank: false},
  {url: '/order/coffee', text: 'See Market', blank: true},
]

export default function AdminSidebar() {
  return (
    <aside className='md:w-72 md:h-screen bg-white'>
      <>
       <Logo/>
        <div className="space-y-3 ">
          <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navigate</p>
            <nav className="flex flex-col">
              {adminNavigation.map(({url,text,blank})=>(
                <AdminRoute key={url} text={text} blank={blank} url={url}/>
              ))}
            </nav>
        </div>
      </>
    </aside>
  )
}
