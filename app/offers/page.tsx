import React from 'react'

const page = () => {
  const posters=[
    {img:'/poster1.jpg'},
    {img:'/poster2.jpg'},
    {img:'/poster3.jpg'},
  ]
  return (
    <div className='m-12'>
        <h1 className="flex items-center justify-center mt-5 text-gray-900 font-bold text-3xl">Our current offers</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-5'>
            {posters.map((poster,index)=>(
                <div key={index} >
                    <img src={poster.img} alt='Current Offer'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page