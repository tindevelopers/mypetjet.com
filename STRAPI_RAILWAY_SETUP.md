# Strapi Railway Environment Variables Setup

The `STRAPI_ADMIN_API_TOKEN` error is coming from your **Strapi backend** hosted on Railway, not from Vercel.

## Where to Set `STRAPI_ADMIN_API_TOKEN`

This environment variable needs to be set in **Railway** (where your Strapi backend is hosted).

### Steps to Set in Railway:

1. **Go to Railway Dashboard**
   - Visit: https://railway.app/dashboard
   - Find your Strapi project: `strapi-app-production-77b3`

2. **Navigate to Environment Variables**
   - Click on your Strapi service/project
   - Go to the **Variables** tab (or **Settings** → **Variables**)

3. **Add the Environment Variable**
   - Click **New Variable** or **+ Add**
   - **Key**: `STRAPI_ADMIN_API_TOKEN`
   - **Value**: Generate a secure random token (see below)
   - Click **Add** or **Save**

4. **Redeploy Strapi**
   - After adding the variable, Railway should automatically redeploy
   - Or manually trigger a redeploy from the Railway dashboard

## How to Generate `STRAPI_ADMIN_API_TOKEN`

You can generate a secure random token using any of these methods:

### Option 1: Using OpenSSL (Recommended)
```bash
openssl rand -base64 32
```

### Option 2: Using Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Option 3: Using Online Generator
- Visit: https://randomkeygen.com/
- Use a "CodeIgniter Encryption Keys" or similar secure random string generator
- Copy a 32+ character random string

### Option 4: Using Python
```bash
python3 -c "import secrets; print(secrets.token_urlsafe(32))"
```

## Example Value Format

The token should be a long, random string, for example:
```
STRAPI_ADMIN_API_TOKEN=your_generated_random_token_here_at_least_32_characters
```

## Other Strapi Environment Variables (Optional)

While setting up Railway, you might also want to ensure these are set:

- `DATABASE_URL` - PostgreSQL connection string (if using external DB)
- `JWT_SECRET` - For JWT token generation
- `ADMIN_JWT_SECRET` - For admin panel authentication
- `APP_KEYS` - Application encryption keys
- `API_TOKEN_SALT` - For API token hashing

## Verification

After setting `STRAPI_ADMIN_API_TOKEN`:

1. **Wait for Railway to redeploy** (usually automatic)
2. **Refresh your Strapi admin panel**
3. **The error should be gone**

## Important Notes

- ✅ `STRAPI_ADMIN_API_TOKEN` is for **Strapi backend** (Railway)
- ✅ `NEXT_PUBLIC_STRAPI_API_TOKEN` is for **Next.js frontend** (Vercel)
- ⚠️ These are **different tokens** with different purposes
- 🔒 Keep tokens secure and never commit them to git

## Troubleshooting

### Still seeing the error?
- Check Railway logs to ensure the variable was set correctly
- Verify the variable name is exactly `STRAPI_ADMIN_API_TOKEN` (case-sensitive)
- Ensure Railway has redeployed after adding the variable
- Check Railway service logs for any other errors

### Need to regenerate the token?
- Simply generate a new token and update it in Railway
- Railway will automatically redeploy with the new value

