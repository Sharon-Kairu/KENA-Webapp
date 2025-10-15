import React from 'react'
import AdminSidebar from '../components/navigation/AdminSidebar'
import Image from 'next/image'

const page = () => {
  return (
    <div id='admindash' className='flex bg-gray-200 min-h-screen'>
      <AdminSidebar />

      {/* Main */}
      <div className='flex-1'>
        {/* Top */}
        <div className='flex items-center p-4'>
          <h1 className='text-gray-900 font-bold text-lg md:text-2xl'>DASHBOARD</h1>
        </div>

        {/* Cards */}
        <div className='m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {/* Card 1 */}
          <div className="p-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-xl flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/group.png"
                alt="Students icon"
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-gray-600 text-sm sm:text-base font-medium">Total Students</h1>
              <h2 className="text-yellow-500 text-2xl sm:text-4xl font-bold mt-1">54,332</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200">
            <div className="flex-shrink-0 bg-green-100 p-3 rounded-xl flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/check.png"
                alt="Current Students"
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-gray-600 text-sm sm:text-base font-medium">Current Students</h1>
              <h2 className="text-green-500 text-2xl sm:text-4xl font-bold mt-1">1,354</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200">
            <div className="flex-shrink-0 bg-purple-100 p-3 rounded-xl flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/book.png"
                alt="Exams icon"
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-gray-600 text-sm sm:text-base font-medium">Exams This Week</h1>
              <h2 className="text-purple-500 text-2xl sm:text-4xl font-bold mt-1">56</h2>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-4 bg-white rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all duration-200">
            <div className="flex-shrink-0 bg-red-100 p-3 rounded-xl flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/credit-card.png"
                alt="Pending payments"
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-gray-600 text-sm sm:text-base font-medium">
                Students with pending payments
              </h1>
              <h2 className="text-red-500 text-2xl sm:text-4xl font-bold mt-1">23</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
