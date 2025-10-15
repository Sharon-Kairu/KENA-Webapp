'use client'
import React from 'react'
import { links } from "../../constants/Constants"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const pathname=usePathname()
  return (
    <div className='fixed top-0 left-0  w-screen bg-gray-900 text-white flex items-center justify-between p-8 shadow-md'>
      
      {/* Logo & Title */}
      <div className='flex items-center gap-3'>
        <Image
          src='/2d.png'
          alt='Logo'
          width={100}
          height={100}
          className='rounded-full'
        />
        <h1 className='text-xl md:text-2xl font-bold'>KENA DRIVING SCHOOL</h1>
      </div>

      {/* Links - hidden on mobile */}
      <div className='hidden md:flex gap-6'>
        {links.map((link) => {
          const isActive = pathname === `/${link.url}`
          return (
            <Link 
              key={link.id}
              href={`/${link.url}`}
              className={`transition-colors ${
                isActive 
                  ? "text-orange-400 font-semibold border-b-2 border-orange-400 pb-1"
                  : "hover:text-orange-400"
              }`}
            >
              {link.title}
            </Link>
          )
        })}
      </div>

      {/* Login button (desktop only) */}
      <button className='hidden md:block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition-colors'>
        Log In
      </button>

      {/* Hamburger Menu (mobile only) */}
      <FiMenu className='md:hidden text-3xl cursor-pointer' />
    </div>
  )
}

export default Navbar
