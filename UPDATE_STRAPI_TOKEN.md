# Strapi API Token Update Guide

## Issue Identified
The Strapi CMS integration was failing with a **401 Unauthorized** error because the API token was invalid or expired.

## Solution: New Token Created ✅

A new Strapi API token has been successfully created:

```
Token Name: Pet Jet Website API Token
Type: Read-only
Created: January 8, 2026
Lifespan: Unlimited (no expiration)
```

### New API Token
```
e02ce37e71e9da3439d34520dc48e40f95cdc3843c79db9ce73133ca891eb817ab29f5b5c1c64f2d5224c8cb7bb3658206665ada99eff11a8423228b031fe5ca09d45ea7ac54c71f8b80f43b6b585a04197e5e3fd4d30c964c04d9bdf7d75a883a223284250dbfc4d7f95ffec14865ba9e68d5cd1c9b049e33b335141b5020a7
```

## ✅ Token Verified
The new token has been tested and works correctly:
- ✅ Returns 200 OK status
- ✅ Successfully authenticates with Strapi API
- ✅ Can fetch articles (returns empty array as expected since no articles exist yet)

## What's Updated

### Local Development (.env)
✅ Local environment variable has been updated in:
- `/home/ubuntu/pet_jet_website/nextjs_space/.env`

### Vercel Production Environment
⚠️ **Action Required**: You need to update this in Vercel:

1. Go to https://vercel.com/dashboard
2. Select your Pet Jet project
3. Go to **Settings** → **Environment Variables**
4. Find `NEXT_PUBLIC_STRAPI_API_TOKEN`
5. Click **Edit** and replace with the new token above
6. Save the changes
7. Vercel will automatically redeploy with the new token

## Expected Result
After updating the Vercel environment variable:
- ✅ The "Connection Error" on `/insights` page will be resolved
- ✅ The page will show "No Articles Yet" message (expected - no articles created)
- ✅ Once articles are created in Strapi, they will display correctly

## Next Steps
1. Update Vercel environment variable (see above)
2. Wait for automatic redeployment (~2-3 minutes)
3. Visit https://mypetjet.com/insights to verify
4. Optionally: Create test articles in Strapi CMS

## Strapi Admin Access
- URL: https://strapi-app-production-77b3.up.railway.app/admin
- Email: developer@tin.info
- Password: Secure@2026

---
**Note**: The .env file is excluded from git commits for security. Never commit API tokens to version control.
