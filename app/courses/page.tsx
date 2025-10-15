import React from 'react'
import Responsivenav from '../components/navigation/Responsivenav'
import Link from 'next/link'

const page = () => {
  return (
    <div id='courses'>
      <Responsivenav/>
      <div className='mt-40'>
          <h1 className='flex items-center justify-center mt-5 text-gray-900 font-bold text-3xl'>COURSES WE OFFER</h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-10 '>

              <div className='flex flex-col bg-gray-900 p-5 items-center justify-center rounded-lg shadow'>
                <h1 className='text-white font-bold text-2xl mb -2'>
                  Driving Courses
                </h1>
                 <p className='text-gray-300 mb-6 max-w-sm'>
                  Learn to drive confidently and safely with our professional instructors. We offer flexible classes tailored to your schedule.
                </p>
                <Link
                  href="/driving"
                  className='bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors font-medium'
                >
                  Learn More
                </Link>
              </div>
              
              <div className='flex flex-col bg-gray-900 p-8 items-center justify-between rounded-lg shadow text-center'>
                <h1 className='text-white font-bold text-2xl mb-4'>
                  Computer Courses
                </h1>
                <p className='text-gray-300 mb-6 max-w-sm'>
                  Master essential computer skills with hands-on training in Microsoft Office, typing, and computer literacy.
                </p>
                <Link
                  href="/computer"
                  className='bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-colors font-medium'
                >
                  Learn More
                </Link>
              </div>


          </div>
      </div>

    </div>
  )
}

export default page