import { NextResponse } from 'next/server'

export async function GET() {
  const placeId = 'ChIJvdj-2Y5OLxgRdS9IxGyfjd8'
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`
  )
  const data = await res.json()

  return NextResponse.json(data)
}
