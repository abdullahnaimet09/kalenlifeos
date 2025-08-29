# Traffic Analytics Setup Guide

## 🚀 Quick Setup

Your traffic analytics system is now ready! Here's how to get started:

### 1. Google Analytics Setup

1. **Get your GA4 Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use existing one
   - Go to Admin → Data Streams → Web
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Update the Analytics Page:**
   - Open `src/pages/AnalyticsPage.tsx`
   - Replace `'G-XXXXXXXXXX'` with your actual Measurement ID
   ```typescript
   useGoogleAnalytics({
     measurementId: 'G-XXXXXXXXXX', // Your actual GA4 measurement ID
     debugMode: process.env.NODE_ENV === 'development'
   });
   ```

### 2. Access Your Analytics Dashboard

Visit your website at: `https://yoursite.com/#/analytics`

You'll see two tabs:
- **Traffic Analytics**: Real-time traffic source tracking
- **UTM Link Generator**: Create trackable links for campaigns

## 📊 What's Being Tracked

### Traffic Sources
- **Search Engines**: Google, Bing, Yahoo, DuckDuckGo, Baidu, Yandex
- **Social Media**: Facebook, Twitter/X, Instagram, LinkedIn, YouTube, TikTok, Pinterest, Reddit, WhatsApp, Telegram
- **Direct Traffic**: Direct visits and bookmarks
- **Referral Traffic**: Links from other websites
- **Affiliate Traffic**: Your affiliate program links
- **Email Traffic**: Email campaign clicks

### UTM Parameters
- `utm_source`: Traffic source (e.g., facebook, google)
- `utm_medium`: Marketing medium (e.g., social, cpc, email)
- `utm_campaign`: Campaign name (e.g., summer-sale)
- `utm_term`: Keywords (for paid search)
- `utm_content`: Content variation (e.g., banner, text)
- `affiliate_id`: Affiliate partner ID

## 🔗 Creating Trackable Links

### Using the UTM Generator
1. Go to the UTM Link Generator tab
2. Fill in your base URL
3. Select source, medium, and campaign
4. Add optional parameters (term, content, affiliate ID)
5. Generate and copy your trackable link

### Example UTM Links
```
https://yoursite.com/?utm_source=facebook&utm_medium=social&utm_campaign=summer-sale
https://yoursite.com/?utm_source=email&utm_medium=email&utm_campaign=newsletter&affiliate_id=partner123
https://yoursite.com/?utm_source=google&utm_medium=cpc&utm_campaign=product-launch&utm_term=best+product
```

## 📈 Understanding Your Data

### Traffic Analytics Dashboard
- **Current Visit**: Shows the source of the current visitor
- **Traffic Sources Overview**: Breakdown by source type
- **Top Sources**: Most common traffic sources
- **Search Engines**: Which search engines drive traffic
- **Social Platforms**: Which social media platforms work best
- **Affiliate Performance**: Which affiliates bring the most traffic

### Google Analytics Integration
The system automatically sends data to Google Analytics with custom parameters:
- `traffic_source`: Type of traffic (search, social, direct, etc.)
- `source`: Specific source (Google, Facebook, etc.)
- `medium`: Marketing medium
- `campaign`: Campaign name
- `affiliate_id`: Affiliate partner ID
- `search_term`: Search keywords
- `social_platform`: Social media platform

## 🛠️ Customization

### Adding New Traffic Sources
Edit `src/hooks/useTrafficAnalytics.ts`:

```typescript
// Add new search engines
if (hostname.includes('your-search-engine')) {
  const term = url.searchParams.get('q');
  return { engine: 'Your Search Engine', term };
}

// Add new social platforms
if (hostname.includes('your-social-platform')) {
  return { platform: 'Your Social Platform' };
}
```

### Custom Affiliate Parameters
Update the `affiliateParams` array in the `detectAffiliateLink` function:

```typescript
const affiliateParams = [
  'a', 'affiliate', 'affiliate_id', 'ref', 'ref_id', 'partner', 
  'campaign', 'source', 'utm_source', 'utm_medium', 'utm_campaign',
  'your-custom-param' // Add your custom parameter
];
```

## 🔍 Testing Your Setup

### Test Different Traffic Sources
1. **Search Engine**: Search for your site on Google/Bing
2. **Social Media**: Share your site on Facebook/Twitter
3. **Direct**: Type your URL directly in browser
4. **UTM Links**: Use the UTM generator to create test links
5. **Affiliate**: Add `?affiliate_id=test123` to your URL

### Verify Google Analytics
1. Go to Google Analytics → Reports → Realtime
2. Visit your site with different traffic sources
3. Check that custom parameters appear in events

## 📱 Mobile Tracking

The system works on all devices and tracks:
- Mobile vs desktop traffic
- User agents
- Referrer information
- UTM parameters

## 🔒 Privacy & Data Storage

- Traffic data is stored locally in browser localStorage
- No personal information is collected
- Data is automatically cleaned (keeps last 1000 visits)
- Google Analytics follows GA4 privacy standards

## 🚨 Troubleshooting

### Analytics Not Working
1. Check browser console for errors
2. Verify Google Analytics Measurement ID
3. Ensure UTM parameters are properly formatted
4. Check if ad blockers are interfering

### No Data Showing
1. Wait a few minutes for data to appear
2. Refresh the analytics page
3. Check if localStorage is enabled
4. Verify the traffic analytics hook is loaded

### Google Analytics Issues
1. Verify Measurement ID is correct
2. Check Google Analytics real-time reports
3. Ensure gtag script is loading
4. Check for ad blocker interference

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify all setup steps are completed
3. Test with different traffic sources
4. Check Google Analytics documentation

## 🎯 Next Steps

1. **Set up Google Analytics** with your Measurement ID
2. **Create UTM links** for your marketing campaigns
3. **Monitor traffic sources** in the dashboard
4. **Optimize campaigns** based on data insights
5. **Set up conversion tracking** in Google Analytics

Your traffic analytics system is now ready to track all your traffic sources! 🎉
