import { VercelRequest, VercelResponse } from '@vercel/node';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Validate environment variables
    if (!process.env.GOOGLE_PLACES_API_KEY || !process.env.GOOGLE_PLACE_ID) {
      console.error('Missing Google Places API configuration');
      return res.status(500).json({
        success: false,
        message: 'Google Reviews service configuration error'
      });
    }

    const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;

    // Fetch reviews from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API status: ${data.status}`);
    }

    // Transform Google Reviews to match our testimonial format
    const transformedReviews = data.result.reviews?.map((review, index) => ({
      id: `google-${review.time}-${index}`,
      name: review.author_name,
      location: 'Hyderabad', // Default location since Google doesn't provide specific location
      eventType: 'Event Planning', // Default event type for Google reviews
      rating: review.rating,
      review: review.text,
      eventDate: review.relative_time_description,
      venue: 'Various Locations',
      source: 'google',
      profilePhoto: review.profile_photo_url,
      authorUrl: review.author_url,
      timestamp: review.time
    })) || [];

    // Sort by most recent first
    transformedReviews.sort((a, b) => b.timestamp - a.timestamp);

    res.status(200).json({
      success: true,
      data: {
        reviews: transformedReviews,
        totalRating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        lastUpdated: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Google Reviews',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}