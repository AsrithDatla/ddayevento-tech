# Google Reviews Integration Setup Guide

This guide will help you set up live Google Reviews integration for the D Day Evento website.

## Prerequisites

1. A Google Cloud Platform account
2. Your business listed on Google My Business
3. Access to your website's environment variables

## Step 1: Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

## Step 2: Find Your Google Place ID

### Method 1: Using Place ID Finder
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "D Day Evento" or your business address
3. Copy the Place ID

### Method 2: Using Google My Business
1. Go to your Google My Business dashboard
2. Select your business
3. The Place ID is in the URL or can be found in the business details

### Method 3: Manual Search
1. Go to Google Maps
2. Search for your business
3. Look at the URL - the Place ID is the long string after "place/"

## Step 3: Configure Environment Variables

Add these variables to your `.env` file:

```env
# Google Places API for Reviews
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

## Step 4: API Security (Recommended)

1. In Google Cloud Console, go to your API key
2. Click "Restrict Key"
3. Under "API restrictions", select "Restrict key"
4. Choose "Places API"
5. Under "Website restrictions", add your domain:
   - `https://yourdomain.com/*`
   - `https://www.yourdomain.com/*`

## Step 5: Test the Integration

1. Deploy your website with the new environment variables
2. Visit the testimonials section
3. You should see:
   - "Loading live reviews..." initially
   - Google Reviews badge with rating and count
   - Mixed testimonials (Google + local)
   - Profile photos for Google reviewers

## Features Included

### ✅ **Live Google Reviews**
- Automatically fetches latest reviews every 30 minutes
- Displays real customer photos and names
- Shows verified Google badge
- Links to original Google reviews

### ✅ **Fallback System**
- Caches reviews locally for offline access
- Falls back to local testimonials if API fails
- Shows cached reviews with refresh option

### ✅ **Smart Mixing**
- Combines Google reviews with curated local testimonials
- Prioritizes recent Google reviews
- Maintains event type filtering

### ✅ **Real-time Stats**
- Shows live Google rating average
- Displays total review count
- Updates automatically

## Troubleshooting

### Common Issues

1. **"Missing Google Places API configuration" error**
   - Check that environment variables are set correctly
   - Ensure API key is valid and Places API is enabled

2. **"Showing cached reviews" message**
   - API quota exceeded or network issue
   - Reviews will still display from cache
   - Click refresh button to retry

3. **No Google reviews showing**
   - Verify Place ID is correct
   - Check that your business has public reviews
   - Ensure API key has proper permissions

### API Limits

- Google Places API has usage limits
- Free tier: 1000 requests per month
- Each page load = 1 request (cached for 30 minutes)
- Monitor usage in Google Cloud Console

## Cost Considerations

- **Free Tier**: 1000 requests/month (sufficient for most websites)
- **Paid Tier**: $17 per 1000 requests after free tier
- **Optimization**: Reviews are cached for 30 minutes to minimize API calls

## Support

If you need help setting this up:
1. Check the browser console for error messages
2. Verify environment variables are deployed correctly
3. Test API key with Google's API Explorer
4. Contact your developer for assistance

## Benefits

✅ **Automatic Updates**: New Google reviews appear automatically
✅ **Trust Building**: Real verified reviews with photos
✅ **SEO Benefits**: Fresh content and social proof
✅ **No Maintenance**: Fully automated system
✅ **Fallback Protection**: Always shows reviews even if API fails