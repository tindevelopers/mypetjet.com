# Vercel Environment Variables Setup

This document lists all environment variables required for the Pet Jet website deployment on Vercel.

## Required Environment Variables

### Strapi CMS (Required)

These variables are **required** for the website to function properly with Strapi CMS integration.

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `NEXT_PUBLIC_STRAPI_API_URL` | Strapi API base URL | `https://usable-purpose-b78d93dac8.strapiapp.com` |
| `NEXT_PUBLIC_STRAPI_API_TOKEN` | Strapi API authentication token | `your_strapi_api_token_here` |

**Note:** The `NEXT_PUBLIC_` prefix makes these variables available in the browser. Keep this prefix for client-side access.

## Optional Environment Variables (Phase 2)

These variables are for future GoHighLevel CRM integration and are not currently required.

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `GHL_API_KEY` | GoHighLevel API key | `your_ghl_api_key` |
| `GHL_LOCATION_ID` | GoHighLevel location ID | `your_ghl_location_id` |

## How to Set Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: Enter the variable name (e.g., `NEXT_PUBLIC_STRAPI_API_URL`)
   - **Value**: Enter the variable value
   - **Environment**: Select which environments to apply to:
     - ✅ Production
     - ✅ Preview
     - ✅ Development (optional)
4. Click **Save**
5. Repeat for all required variables

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Set environment variables
vercel env add NEXT_PUBLIC_STRAPI_API_URL production
vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN production

# For preview/development environments
vercel env add NEXT_PUBLIC_STRAPI_API_URL preview
vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN preview
```

### Method 3: Bulk Import via Vercel Dashboard

1. Go to **Settings** → **Environment Variables**
2. Click **Import** button
3. Paste your `.env` file content (one variable per line: `KEY=value`)
4. Select environments and import

## Environment-Specific Configuration

### Production
Set all required variables for production deployment:
- `NEXT_PUBLIC_STRAPI_API_URL`
- `NEXT_PUBLIC_STRAPI_API_TOKEN`

### Preview
Use the same values as production (or separate Strapi instance for testing)

### Development
Optional - can use local `.env.local` file for development

## Verification

After setting environment variables:

1. **Redeploy** your application (Vercel will automatically redeploy on next push, or manually trigger)
2. Check build logs to ensure variables are loaded
3. Test the application to verify Strapi integration works

## Security Notes

- ✅ Never commit `.env` files to git
- ✅ Use Vercel's environment variables for sensitive data
- ✅ `NEXT_PUBLIC_*` variables are exposed to the browser - only use for non-sensitive public API URLs
- ✅ Keep API tokens secure and rotate them regularly

## Troubleshooting

### Variables not loading?
- Ensure variable names match exactly (case-sensitive)
- Redeploy after adding new variables
- Check build logs for errors

### Strapi connection issues?
- Verify `NEXT_PUBLIC_STRAPI_API_URL` is correct
- Verify `NEXT_PUBLIC_STRAPI_API_TOKEN` is valid
- Check Strapi CORS settings allow your Vercel domain

### Need to update variables?
- Update in Vercel dashboard
- Redeploy (or wait for next automatic deployment)

