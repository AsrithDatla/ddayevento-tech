import { useState, useEffect } from 'react';

export interface GoogleReview {
  id: string;
  name: string;
  location: string;
  eventType: string;
  rating: number;
  review: string;
  eventDate: string;
  venue?: string;
  source: 'google';
  profilePhoto?: string;
  authorUrl?: string;
  timestamp: number;
}

export interface GoogleReviewsData {
  reviews: GoogleReview[];
  totalRating: number;
  totalReviews: number;
  lastUpdated: string;
}

interface UseGoogleReviewsReturn {
  reviews: GoogleReview[];
  loading: boolean;
  error: string | null;
  totalRating: number;
  totalReviews: number;
  lastUpdated: string | null;
  refetch: () => Promise<void>;
}

export const useGoogleReviews = (
  autoFetch: boolean = true,
  refreshInterval?: number
): UseGoogleReviewsReturn => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalRating, setTotalRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/google-reviews');
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch reviews');
      }

      const data: GoogleReviewsData = result.data;
      setReviews(data.reviews);
      setTotalRating(data.totalRating);
      setTotalReviews(data.totalReviews);
      setLastUpdated(data.lastUpdated);

      // Cache the reviews in localStorage for offline access
      localStorage.setItem('ddayevento-google-reviews', JSON.stringify({
        ...data,
        cachedAt: new Date().toISOString()
      }));

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      
      // Try to load cached reviews if API fails
      try {
        const cached = localStorage.getItem('ddayevento-google-reviews');
        if (cached) {
          const cachedData = JSON.parse(cached);
          const cacheAge = Date.now() - new Date(cachedData.cachedAt).getTime();
          
          // Use cached data if it's less than 24 hours old
          if (cacheAge < 24 * 60 * 60 * 1000) {
            setReviews(cachedData.reviews);
            setTotalRating(cachedData.totalRating);
            setTotalReviews(cachedData.totalReviews);
            setLastUpdated(cachedData.lastUpdated);
            console.log('Using cached Google Reviews due to API error');
          }
        }
      } catch (cacheError) {
        console.error('Failed to load cached reviews:', cacheError);
      }
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    if (autoFetch) {
      fetchReviews();
    }
  }, [autoFetch]);

  // Set up refresh interval
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchReviews, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return {
    reviews,
    loading,
    error,
    totalRating,
    totalReviews,
    lastUpdated,
    refetch: fetchReviews
  };
};