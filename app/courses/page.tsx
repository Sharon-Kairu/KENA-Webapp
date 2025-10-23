import React from 'react'
import Responsivenav from '../components/navigation/Responsivenav'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer/Footer'

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

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
                    className='object-cover mix-blend-multiply'
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
              {/*Card 4*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/taxi.jpg'
                    alt='Uber category'
                    fill
                    className='object-cover mix-blend-multiply'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category B3
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Learn the essential skills for operating professional cab and taxi services under Category B3. 
                  This course emphasizes safe urban driving, passenger handling, navigation, and adherence to transport regulations, 
                  equipping you to drive confidently and responsibly in both city and suburban environments.
                </p>
              </div>
              {/*Card 5*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/truck.jpg'
                    alt='Truck and lorry category'
                    fill
                    className='object-cover mix-blend-multiply'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category C1 and C2
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                 Build your expertise in handling heavy commercial vehicles and lorries. 
                 This course provides practical training in load management, road safety, and long-distance driving, 
                 preparing you to operate lorries and other goods vehicles with confidence and professionalism.
                </p>
              </div>
              {/*Card 6*/}
              <div className='bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300'>
                <div className='relative w-35 h-35 mb-4'>
                  <Image
                    src='/matatu.png'
                    alt='Motorcycle training category'
                    fill
                    className='object-cover mix-blend-multiply'
                  />
                </div>
                <h1 className='text-orange-500 font-extrabold text-xl md:text-2xl mb-2'>
                  Category D
                </h1>
                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                  Acquire the skills required to safely operate public service vehicles whichare vans, minibuses, matatus and buses. 
                  This program focuses on passenger safety, route management, and customer service, 
                  enabling you to drive buses and matatus responsibly while maintaining the highest standards of professionalism.
                </p>
              </div>

            </div>
               

          </div>

          <div className='flex flex-col space-y-5 justify-center items-center mt-10'>
            <h1 className='text-orange-500 font-bold text-xl md:text-3xl'>Computer Course</h1>
            <p className='text-gray-700 max-w-2xl text-center'>
              Our computer courses are designed to equip you with essential digital skills for today’s technology-driven world. 
              Whether you're a beginner or looking to advance your skills, our packages cover everything from computer basics to professional applications.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-5'>

              {/* Package 1 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/computer-skills.png' alt='Introduction to Computers Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>1. Introduction to Computers</h1>
                <p className='text-gray-300 text-sm mt-2'>Understand basic computer concepts and essential operations.</p>
              </div>

              {/* Package 2 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/motherboard.png' alt='Computer Hardware Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>2. Computer Systems & Hardware</h1>
                <p className='text-gray-300 text-sm mt-2'>Learn how computer components function and interact.</p>
              </div>

              {/* Package 3 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/windows-logo.png' alt='Windows Operating System Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>3. Microsoft Windows</h1>
                <p className='text-gray-300 text-sm mt-2'>Navigate and manage files within the Windows environment efficiently.</p>
              </div>

              {/* Package 4 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/word.png' alt='Microsoft Word Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>4. Microsoft Word</h1>
                <p className='text-gray-300 text-sm mt-2'>Create and format professional documents with ease.</p>
              </div>

              {/* Package 5 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/excel-file.png' alt='Microsoft Excel Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>5. Microsoft Excel</h1>
                <p className='text-gray-300 text-sm mt-2'>Master spreadsheets for data analysis and record management.</p>
              </div>

              {/* Package 6 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/microsoft-access.png' alt='Microsoft Access Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>6. Microsoft Access</h1>
                <p className='text-gray-300 text-sm mt-2'>Learn to design and manage databases efficiently.</p>
              </div>

              {/* Package 7 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/microsoft-publisher.png' alt='Microsoft Publisher Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>7. Microsoft Publisher</h1>
                <p className='text-gray-300 text-sm mt-2'>Design flyers, brochures, and marketing materials easily.</p>
              </div>

              {/* Package 8 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/powerpoint.png' alt='Microsoft PowerPoint Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>8. PowerPoint</h1>
                <p className='text-gray-300 text-sm mt-2'>Create engaging presentations with visuals and animations.</p>
              </div>

              {/* Package 9 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/globe (1).png' alt='Email and Internet Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>9. Email and Internet</h1>
                <p className='text-gray-300 text-sm mt-2'>Learn to browse safely and communicate effectively online.</p>
              </div>

              {/* Package 10 */}
              <div className='bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center'>
                <div className='rounded-full p-4 bg-white w-16 h-16 flex items-center justify-center mb-4'>
                  <Image src='/maintanance.png' alt='Computer Maintenance Icon' width={50} height={50} />
                </div>
                <h1 className='text-orange-500 font-bold'>10. Computer Maintenance</h1>
                <p className='text-gray-300 text-sm mt-2'>Understand computer care, troubleshooting, and repair basics.</p>
              </div>
            </div>
          </div>
      </div>
      <Footer/>

    </div>
  )
}

export default page