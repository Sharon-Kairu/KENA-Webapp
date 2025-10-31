import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const placeId = 'ChIJvdj-2Y5OLxgRdS9IxGyfjd8'
    const apiKey = process.env.GOOGLE_MAPS_API
    
    if (!apiKey) {
      console.error('❌ Missing GOOGLE_MAPS_API_KEY in environment variables.')
      return NextResponse.json({ error: 'API key missing' }, { status: 500 })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`

    console.log('➡️ Fetching Google reviews from:', url)
    const response = await fetch(url)

    if (!response.ok) {
      const text = await response.text()
      console.error('❌ Google API returned error:', response.status, text)
      return NextResponse.json({ error: 'Failed to fetch from Google API' }, { status: response.status })
    }

    const data = await response.json()
    console.log('✅ Google reviews data received:', data)

    return NextResponse.json(data)
  } catch (err) {
    console.error('💥 Error in /api/reviews:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
