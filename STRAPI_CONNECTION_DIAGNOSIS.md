# Strapi Connection Error Diagnosis

## Problem Identified

From Vercel logs, the error is:
```
Strapi fetch error: Error: Strapi API error: 401 Unauthorized
```

## Root Cause

**The API token is invalid or expired.**

Direct testing shows:
- ✅ API endpoint is reachable
- ✅ Without token: Returns 403 Forbidden (expected - requires auth)
- ❌ With token: Returns 401 Unauthorized - "Missing or invalid credentials"

This indicates the token stored in Vercel environment variables is either:
1. Invalid/expired
2. Revoked in Strapi
3. Not the correct token for this Strapi instance

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

### Step 3: Regenerate Token in Strapi (REQUIRED)

**The current token is invalid. You MUST create a new one:**

1. **Go to Strapi Admin Panel**
   - Visit: https://strapi-app-production-77b3.up.railway.app/admin
   - Log in if needed

2. **Create New API Token**
   - Navigate to **Settings** → **API Tokens** (or **Settings** → **Users & Permissions Plugin** → **API Tokens**)
   - Click **Create new API Token**
   - **Name**: `Pet Jet Website API Token` (or any descriptive name)
   - **Token type**: Select **Read-only** (or **Full access** if you need write access)
   - **Token duration**: Select **Unlimited** (or set expiration as needed)
   - Click **Save**

3. **Copy the New Token**
   - ⚠️ **IMPORTANT**: Copy the token immediately - you won't be able to see it again!
   - Make sure there are NO trailing spaces or newlines
   - The token should be a long string of characters

4. **Update Vercel Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXT_PUBLIC_STRAPI_API_TOKEN` for Production, Preview, and Development
   - Use the Vercel CLI to ensure no newlines:
     ```bash
     echo -n "YOUR_NEW_TOKEN_HERE" | vercel env rm NEXT_PUBLIC_STRAPI_API_TOKEN production --yes
     echo -n "YOUR_NEW_TOKEN_HERE" | vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN production
     ```

5. **Redeploy**
   - Vercel will automatically redeploy, or manually trigger a redeploy

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

