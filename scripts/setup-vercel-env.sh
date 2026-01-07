#!/bin/bash

# Vercel Environment Variables Setup Script
# This script helps you set environment variables in Vercel

set -e

echo "🚀 Vercel Environment Variables Setup"
echo "======================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "Install it with: npm i -g vercel"
    exit 1
fi

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel."
    echo "Please run: vercel login"
    exit 1
fi

echo "✅ Vercel CLI is installed and you're logged in"
echo ""

# Check if project is linked
if [ ! -f ".vercel/project.json" ]; then
    echo "⚠️  Project not linked to Vercel."
    echo "Linking project..."
    vercel link
    echo ""
fi

echo "📝 Setting up environment variables..."
echo ""
echo "Required Variables:"
echo "1. NEXT_PUBLIC_STRAPI_API_URL"
echo "2. NEXT_PUBLIC_STRAPI_API_TOKEN"
echo ""
echo "Optional (Phase 2):"
echo "3. GHL_API_KEY"
echo "4. GHL_LOCATION_ID"
echo ""

# Prompt for Strapi URL
read -p "Enter NEXT_PUBLIC_STRAPI_API_URL [default: https://strapi-app-production-77b3.up.railway.app]: " STRAPI_URL
STRAPI_URL=${STRAPI_URL:-https://strapi-app-production-77b3.up.railway.app}

# Prompt for Strapi Token
read -p "Enter NEXT_PUBLIC_STRAPI_API_TOKEN (required): " STRAPI_TOKEN
if [ -z "$STRAPI_TOKEN" ]; then
    echo "❌ STRAPI_TOKEN is required!"
    exit 1
fi

# Set Strapi variables for production
echo ""
echo "Setting NEXT_PUBLIC_STRAPI_API_URL for production..."
echo "$STRAPI_URL" | vercel env add NEXT_PUBLIC_STRAPI_API_URL production

echo "Setting NEXT_PUBLIC_STRAPI_API_TOKEN for production..."
echo "$STRAPI_TOKEN" | vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN production

# Set for preview as well
read -p "Set same values for preview environment? (y/n) [y]: " SET_PREVIEW
SET_PREVIEW=${SET_PREVIEW:-y}
if [ "$SET_PREVIEW" = "y" ]; then
    echo ""
    echo "Setting NEXT_PUBLIC_STRAPI_API_URL for preview..."
    echo "$STRAPI_URL" | vercel env add NEXT_PUBLIC_STRAPI_API_URL preview
    
    echo "Setting NEXT_PUBLIC_STRAPI_API_TOKEN for preview..."
    echo "$STRAPI_TOKEN" | vercel env add NEXT_PUBLIC_STRAPI_API_TOKEN preview
fi

# Optional GHL variables
read -p "Set GoHighLevel variables? (y/n) [n]: " SET_GHL
SET_GHL=${SET_GHL:-n}
if [ "$SET_GHL" = "y" ]; then
    read -p "Enter GHL_API_KEY: " GHL_KEY
    read -p "Enter GHL_LOCATION_ID: " GHL_LOCATION
    
    if [ ! -z "$GHL_KEY" ]; then
        echo "$GHL_KEY" | vercel env add GHL_API_KEY production
        echo "$GHL_KEY" | vercel env add GHL_API_KEY preview
    fi
    
    if [ ! -z "$GHL_LOCATION" ]; then
        echo "$GHL_LOCATION" | vercel env add GHL_LOCATION_ID production
        echo "$GHL_LOCATION" | vercel env add GHL_LOCATION_ID preview
    fi
fi

echo ""
echo "✅ Environment variables set successfully!"
echo ""
echo "📋 Summary:"
vercel env ls
echo ""
echo "🔄 To trigger a new deployment with these variables:"
echo "   vercel --prod"
echo ""
echo "Or push to main branch to trigger automatic deployment."

