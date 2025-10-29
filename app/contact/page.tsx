'use client'
import React from 'react'
import Image from 'next/image'
import { FiMail, FiPhone, FiInstagram ,FiTwitter,FiFacebook} from 'react-icons/fi'

const Page = () => {
  return (
    <div id="contact" className="px-6 md:px-16 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Responsive Image Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-[500px] overflow-hidden">
          <Image
            src="/contact.jpg"
            alt="Contact"
            fill
            className="object-cover object-center mix-blend-multiply hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col space-y-6 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Get in Touch with Us
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We’d love to hear from you! Whether you have questions about our driving or computer courses,
            need assistance, or just want to say hello — reach out through any of the platforms below.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-800 hover:text-orange-500 transition-colors">
            <FiMail size={22} />
            <span className="text-sm md:text-base">kenadrvingschool@gmail.com</span>
          </div>

          {/* WhatsApp / Phone */}
          <a
            href="https://wa.me/254713449911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-800 hover:text-green-600 transition-colors"
          >
            <FiPhone size={22} />
            <span className="text-sm md:text-base">+254 713 449 911</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kena_dsthika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-800 hover:text-pink-500 transition-colors"
          >
            <FiInstagram size={22} />
            <span className="text-sm md:text-base">@kenadrivingschool</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/KenaDsThika/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-800 hover:text-blue-800 transition-colors"
          >
            <FiFacebook size={22} />
            <span className="text-sm md:text-base">kenadrivingschool</span>
          </a>
          
          {/* Twitter */}
          <a
            href="https://x.com/kena_dsThika"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-800 hover:text-blue-300 transition-colors"
          >
            <FiTwitter size={22} />
            <span className="text-sm md:text-base">kenadrivingschool</span>
          </a>

         
        </div>
      </div>
    </div>
  )
}

export default Page
