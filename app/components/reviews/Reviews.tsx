'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Review = {
  author_name: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log('Fetching reviews from /api/reviews...')
        const res = await fetch('/api/reviews')
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`)
        }

        const data = await res.json()
        console.log('Reviews fetched successfully:', data)

        if (data?.result?.reviews) {
          setReviews(data.result.reviews)
        } else {
          console.error('No reviews found in response:', data)
          setError('No reviews available.')
        }
      } catch (err: any) {
        console.error('Error fetching reviews:', err)
        setError('Failed to load reviews. Please try again later.')
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
        What Our Students Say
      </h1>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-900 text-white p-6 rounded-xl shadow h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <h3 className="font-semibold text-orange-400">{review.author_name}</h3>
                  </div>
                  <p className="text-yellow-400 mb-1">⭐ {review.rating}</p>
                  <p className="text-gray-300">{review.text}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">{review.relative_time_description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default Reviews
