import React from 'react'

const Page = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <div
        className="relative w-full bg-cover bg-center flex items-center justify-center px-6 py-16 md:py-24"
        style={{ backgroundImage: "url('/about_bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-none md:rounded-lg"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-4xl text-center md:text-left text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-400">
            About Kena
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            At Kena Driving School and Computer College, we have been committed since 2012 
            to do more than just help you pass your test. We pride ourselves on making you a 
            confident driver and an expert in computer skills — preparing you for the modern world. 
            With our experience, we equip you with the best knowledge in Driving, Artificial 
            Intelligence, and Computer Packages.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 p-3 m-2 md:m-6 '>
        <div className='bg-blue-100 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
            <div className='rounded-full p-2 bg-white w-16 h-16'>
                <img src='/mission.png' alt='Mission' />
            </div>
            <h1 className='text-orange-500 font-bold text-2xl'> Our Mission</h1>
            <p className='text-gray-900'>We're building a community of safe, skilled, and confident drivers and Computer proficient people. 
                We believe in being a high value institution for learners of driving and computer, setting the standard for excellence in Thika.</p>    
        </div>
        <div className='bg-blue-100 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
            <div className='rounded-full p-2 bg-white w-16 h-16'>
                <img src='/vision.png' alt='Vision' />
            </div>
            <h1 className='text-orange-500 font-bold text-2xl'> Our Vision</h1>
            <p className='text-gray-900'>Our vision is to develop well rounded, confident and responsible drivers and Computer & A.I 
                students who aspire to achieve their full potential. We will do this by providing  Quality, welcoming, happy, safe, and 
                supportive learning environment in which everyone is equal and all achievements are celebrated.</p>    
        </div>

      </div>
      <h1 className="text-xl md:text-4xl font-bold mb-4 text-orange-400">The Kena Difference</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 p-3 m-2 md:m-6 '>
        <div className='bg-gray-900 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
            <div className='rounded-full p-3 bg-orange-400 w-16 h-16'>
                <img src='/meeting.png' alt='Mission' />
            </div>
            <h1 className='text-orange-400 font-bold text-2xl'> Our Instructors</h1>
            <p className='text-white'>We're powered by a team of top notch instructors who are passionate about teaching. 
                They are the secret behind our best theory, practical sessions & Computer sessions.</p>    
        </div>
        <div className='bg-gray-900 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
            <div className='rounded-full p-3 bg-orange-400 w-16 h-16'>
                <img src='/file.png' alt='Mission' />
            </div>
            <h1 className='text-orange-400 font-bold text-2xl'> Our Standards</h1>
            <p className='text-white'>We are the quality benchmark for driving schools. How? By maintaining strict adherence 
                to the standardized curriculum set forth by NTSA in every single lesson and taking pride in being the 1st school to teach Artificial Intelligence in Thika.</p>    
        </div>
        <div className='bg-gray-900 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
            <div className='rounded-full p-3 bg-orange-400 w-16 h-16'>
                <img src='/trust.png' alt='Mission' />
            </div>
            <h1 className='text-orange-400 font-bold text-2xl'> Our Promise</h1>
            <p className='text-white'>We're proud to be known as the best driving school And Computer college in Thika.
                 Our commitment to affordable pricing and five-star service in google has earned us the best reviews in Thika
                 & its environs. We're not just a school; we're your partners for the long haul..</p>    
        </div>
        <div className='bg-gray-900 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
        <div className='rounded-full p-3 bg-orange-400 w-16 h-16'>
          <img src='/satisfaction.png' alt='Google Reviews' />
        </div>
        <h1 className='text-orange-400 font-bold text-2xl'>Google Reviews</h1>
        <p className='text-white text-center'>
          Our students have shared their experiences on Google — and the feedback speaks for itself!  
          With numerous 5-star reviews, we’re proud to be recognized as one of the most trusted 
          driving schools and computer colleges in Thika.  
          Your success stories inspire us to keep delivering quality training every day.
        </p>
      </div>

      </div>
      </div>
  )
}

export default Page
