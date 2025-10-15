'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { adminLinks } from '@/app/constants/Constants'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {
  const links=adminLinks
   const pathname = usePathname()
  
  return (
    <div className='h-screen  w-70 bg-gray-900 flex flex-col items-center p-4 space-y-10'>
        <Image
          src='/2D.png'
          alt='logo'
          width={150}
          height={150}
          className='mt-3'/>
        
        <h1 className='font-bold text-yellow-500 text-lg md:text-2xl'>ADMIN PORTAL</h1>
        <h1 className='font-bold text-white text-md md:text-xl'>Chris Thairu</h1>

        <div className="flex flex-col space-y-2 p-3">
      {links.map((link) => {
        const isActive = pathname === `/${link.url}`
        return (
          <Link
            key={link.id}
            href={`/${link.url}`}
            className={`flex items-center gap-3 rounded-xl p-2 transition-colors ${
              isActive
                ? 'bg-white text-gray-900 font-medium shadow-md'
                : 'text-yellow-500 hover:bg-gray-200'
            }`}
          >
            <link.icon size={20}/>
            <span className='text-md md:text-lg lg:text-xl'>{link.title}</span>
          </Link>
        )
      })}
    </div>



    </div>
  )
}

export default AdminSidebar