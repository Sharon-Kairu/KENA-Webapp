import React from 'react'
import Responsivenav from '../components/navigation/Responsivenav'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div id='courses'>
      <Responsivenav/>
      <div className='mt-40'>
          <h1 className='flex items-center justify-center mt-5 text-gray-900 font-bold text-3xl'>COURSES WE OFFER</h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-10 '>

              <div className='flex flex-col bg-gray-900 p-5 space-y-5 items-center justify-center rounded-lg shadow'>
                <Image
                  src='/driving.png'
                  alt='Driving Vector'
                  width={350}
                  height={350}
                  className='mt-4 rounded-xl'
                />
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
              
              <div className='flex flex-col bg-gray-900 p-8 space-y-5 items-center justify-between rounded-lg shadow text-center'>
                <Image
                  src='/computer.jpg'
                  alt='Computer Vector'
                  width={350}
                  height={350}
                  className='mt-4 rounded-xl'
                />
                <h1 className='text-white font-bold text-2xl'>
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
          {/*Driving Courses*/}
          <div className='w-full p-6 bg-gray-900 flex flex-col space-y-5 justify-center items-center'>
            <h1 className='text-white font-bold text-xl md:text-3xl'> Driving Courses</h1>
            {/*Category Cards*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

              {/*Card 1*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/motorcycle.jpg'
                    alt='Motorcycle training category'
                    fill
                    className='rounded-xl object-cover'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category A1 and A2
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Learn how to ride and handle lightweight and regular motorcycles safely. 
                  Category A1 covers light motorcycles up to 125cc, while Category A2 includes 
                  standard motorcycles as defined by NTSA.
                </p>
              </div>
              {/*Card 2*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/tuktuk.jpg'
                    alt='Motorcycle training category'
                    fill
                    className='rounded-xl object-cover'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category A3
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Learn to operate three-wheeled vehicles (tuk-tuks) with confidence and safety. 
                  This category covers motorized tricycles used for personal or commercial transport, 
                  helping you gain the skills needed to navigate urban and suburban roads
                </p>
              </div>
              {/*Card 3*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/saloon_car.webp'
                    alt='Motorcycle training category'
                    fill
                    className='object-cover'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category B1 and B2
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Master the art of driving small light vehicles such as saloon cars and station wagons. 
                  Category B covers vehicles not exceeding 3,500 kg in weight and designed to carry up to eight passengers, equipping you with the skills and confidence to drive safely on all road types
                </p>
              </div>

            </div>
               

          </div>
      </div>

    </div>
  )
}

export default page