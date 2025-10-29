import React from 'react'

const Homecontent = () => {
  const why=[
    {img: '/trophy.png',
     title:'1. We are Top Rated!',
     desc:`Looking for the best driving school & Computer college in Thika? You're in the right place! 
       We're a top rated driving school & Computer College in Thika with the best reviews in Thika & its environs for a reason.`
    },
    {img: '/education.png',
     title:'2. Learn from the Pros!',
     desc:`Our top notch instructors are friendly, patient, and total experts in. 
       They deliver the best theory and practical sessions to get you road-ready, fast. Our Computer tutors provide the best in computer packages and A.I.`
    },
    {img: '/high-quality.png',
     title:'3. Quality You Can Trust!',
     desc:` We guarantee 100% adherence to the standardized curriculum set forth by NTSA. We are the quality benchmark for driving schools &
      computer college, offering you an affordable path to your license computer certifications in artificial Intelligence (A.I).`
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='m-6 bg-gray-900 p-3 rounded-xl md:p-6 text-center'>
            <p className='text-white leading-relaxed'> <span className='text-orange-500 font-bold text-2xl'>Welcome to Kena Driving School & Computer college!</span><br/>Where your confidence behind the wheel 
              and behind the computer is our top priority. We are first to teach how Artificial 
              intelligence incorporates in our daily life. We're not just another driving school and 
              computer college; we're your partners on the road, Computer Skills & Artificial Intelligence to 
              bring you success In your future.
            </p>
        </div>
        <h1 className='text-gray-00 font-bold text-2xl'> Why Choose Kena?</h1>
        
        <div className='grid grid-cols-1 mt-4 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3'>
            {why.map((reason,index)=>(
              
                <div key={index}
                className='bg-blue-50 p-3 flex flex-col gap-4 items-center justify-center rounded-xl'>
                    <div className='rounded-full p-2 bg-white w-16 h-16'>
                        <img 
                            src={reason.img}
                            alt={reason.title}/>
                    </div>
                    <h1 className='text-orange-500 font-bold text-2xl'>{reason.title}</h1>
                    <p className='text-gray-900'>{reason.desc}</p>
                </div>
            ))}            
        </div>
       

    </div>
  )
}

export default Homecontent