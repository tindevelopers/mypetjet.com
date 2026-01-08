# Strapi Connection Error Diagnosis

## Problem Identified

From Vercel logs, the error is:
```
Strapi fetch error: Error: Strapi API error: 401 Unauthorized
```

## Root Cause

The environment variables in Vercel have **trailing newlines** (`\n`) in their values:
- `NEXT_PUBLIC_STRAPI_API_TOKEN` ends with `\n`
- `NEXT_PUBLIC_STRAPI_API_URL` ends with `\n`

This causes the Bearer token to be invalid when sent to Strapi, resulting in a 401 Unauthorized error.

## Solution

### Step 1: Remove Trailing Newlines from Vercel Environment Variables

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select project: `mypetjet-com`
   - Go to **Settings** → **Environment Variables**

2. **Update Each Variable**
   - For each `NEXT_PUBLIC_STRAPI_API_TOKEN` (Production, Preview, Development):
     - Click **Edit**
     - Remove any trailing whitespace/newlines
     - The token should end with the last character, no newline
     - Click **Save**
   
   - For each `NEXT_PUBLIC_STRAPI_API_URL`:
     - Click **Edit**
     - Ensure it's exactly: `https://strapi-app-production-77b3.up.railway.app`
     - No trailing newline or spaces
     - Click **Save**

3. **Redeploy**
   - After updating variables, Vercel will automatically redeploy
   - Or manually trigger: **Deployments** → **Redeploy**

### Step 2: Verify Token is Valid

Test the token directly (without newlines):

```bash
TOKEN="your_token_without_newline"
curl "https://strapi-app-production-77b3.up.railway.app/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=1" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json"
```

If you get a 401, the token itself might be invalid or expired.

### Step 3: Regenerate Token in Strapi (If Needed)

If the token is invalid:

1. Go to Strapi Admin Panel: https://strapi-app-production-77b3.up.railway.app/admin
2. Navigate to **Settings** → **API Tokens**
3. Create a new **Read-only** API token
4. Copy the token (without any trailing spaces/newlines)
5. Update in Vercel environment variables

## Prevention

When setting environment variables in Vercel:
- ✅ Copy token values carefully
- ✅ Don't include trailing newlines or spaces
- ✅ Use the Vercel CLI to set variables (it handles this better):
  ```bash
  echo "your_token_value" | vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN production
  ```

## Current Status

- ✅ Environment variables are set in Vercel
- ✅ API URL is correct
- ❌ Token has trailing newline causing 401 error
- ⏳ Need to remove newlines and redeploy

