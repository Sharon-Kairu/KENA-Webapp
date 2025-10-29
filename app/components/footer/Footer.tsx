import React from 'react'
import Image from 'next/image'
import { links } from "../../constants/Constants"
import Link from 'next/link'
import {FiMail, FiPhone, FiInstagram,} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='bg-gray-900 mt-6 p-4' >
        <div className='grid grid-cols-1 lg:grid-cols-3 p-10 gap-4 justify-between'>
            <div className='flex flex-col justify-center items-center'>
                <Image 
                    src='/2D.png'
                    alt='Logo'
                    width={150}
                    height={150}
                />
                <h1 className='text-white text-2xl font-bold mt-4'>KENA DRIVING SCHOOL AND COMPUTER COLLEGE</h1>
            </div>

            <div className='flex flex-col items-center justify-center gap-4 text-white'>
                {links.map((link)=>(
                    <Link 
                       key={link.url}
                       href={`/${link.url}`}>
                          {link.title}
                    </Link>
                ))}

            </div>


            <div className='flex flex-col items-center justify-center gap-4 text-white'>
                <h1 className='text-white font-semibold text-xl'>Contact us</h1>
                <div className="flex items-center gap-2">
                    <FiMail size={20} />
                    <span>kenadrvingschool@gmail.com </span>
                </div>
               <div className="flex flex-col gap-3 mt-4 lg:mt-0">
                {/* WhatsApp / Phone */}
                <a 
                    href="https://wa.me/254713449911" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-600 transition"
                >
                    <FiPhone size={20} />
                    <span>+254 713 449 911</span>
                </a>

                {/* Instagram */}
                <a 
                    href="https://www.instagram.com/kena_dsthika/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-pink-500 transition"
                >
                    <FiInstagram size={20} />
                    <span>@kenadrivingschool</span>
                </a>
                </div>

            </div>
        </div>

        

        <div className="text-center font-bold text-gray-700 text-sm mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} KENA DRIVING SCHOOL. All rights reserved.
        </div>

    </footer>
  )
}

export default Footer