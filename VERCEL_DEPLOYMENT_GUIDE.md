# Vercel Deployment Guide for Pet Jet Website
**Date:** January 8, 2026  
**Repository:** https://github.com/tindevelopers/mypetjet.com  
**Branch:** `main`

---

## ✅ Ready for Deployment

All code changes have been:
- ✅ Tested locally with successful results
- ✅ Committed to GitHub repository
- ✅ Pushed to `main` branch
- ✅ Form field name mismatches fixed
- ✅ GoHighLevel integration working

---

## 🔑 Required Environment Variables

Configure these in your Vercel project settings:

### **1. Strapi CMS (Content Management)**
```env
NEXT_PUBLIC_STRAPI_API_URL=https://usable-purpose-b78d93dac8.strapiapp.com
NEXT_PUBLIC_STRAPI_API_TOKEN=795fc916eca7cc05eb1965ad73fc772d0e6e39159963206e1f0789defa48af91ebd20344abddb09fe954d9ee53534f1bf7b53d9fb17843df915d2436a8e4a0d3f8bde69fe62a322856eb39af99c8716cd23d995991b2421605d362d5d3f6d4009de96ea9b2e9b102569da05104bf34f9048b6678de2a4d5cf9ea3aef692ec4af
```

### **2. GoHighLevel CRM (Form Submissions)**
```env
GHL_API_KEY=pit-0af5c3fc-3beb-4ca9-82e3-c1eaac125834
GHL_LOCATION_ID=D5ekkhuWoyArzhJUs67n
```

---

## 📝 How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable one by one:
   - **Key:** Variable name (e.g., `GHL_API_KEY`)
   - **Value:** Variable value (paste from above)
   - **Environment:** Select **Production**, **Preview**, and **Development**
4. Click **Save** after adding all variables
5. Trigger a new deployment or wait for auto-deployment

---

## 🚀 Deployment Process

### **Option 1: Auto-Deployment (Recommended)**
Vercel will automatically deploy when it detects the push to GitHub:
- Monitor the Vercel dashboard for deployment status
- Deployment typically takes 2-5 minutes
- You'll receive a deployment URL once complete

### **Option 2: Manual Deployment**
If you need to trigger manually:
1. Go to Vercel dashboard
2. Click **Deployments** tab
3. Click **Redeploy** on the latest deployment
4. Or use Vercel CLI: `vercel --prod`

---

## ✅ Post-Deployment Verification

After deployment completes, test all forms on production:

### **1. Test Partnership Form**
- URL: `https://yourdomain.com/partnerships`
- Fill out all required fields
- Submit form
- Verify success message appears
- Check GoHighLevel for new contact

### **2. Test Contact Form**
- URL: `https://yourdomain.com/contact`
- Fill out all required fields
- Submit form
- Verify success message appears
- Check GoHighLevel for new contact

### **3. Test Joey Booking Form**
- URL: `https://yourdomain.com/meet-joey`
- Fill out all required fields
- Submit form
- Verify success message appears
- Check GoHighLevel for new contact

### **4. Test Insights/Blog**
- URL: `https://yourdomain.com/insights`
- Verify articles load from Strapi
- Click on an article
- Verify article detail page loads correctly

---

## 🔍 Troubleshooting

### **Forms Not Submitting**
- Check Vercel deployment logs for errors
- Verify environment variables are set correctly
- Ensure variables are set for "Production" environment
- Check browser console for JavaScript errors

### **Insights Not Loading**
- Verify `NEXT_PUBLIC_STRAPI_API_URL` is correct
- Verify `NEXT_PUBLIC_STRAPI_API_TOKEN` is valid
- Check if Strapi has any published articles
- Review Vercel function logs

### **GHL Integration Not Working**
- Verify `GHL_API_KEY` is correct
- Verify `GHL_LOCATION_ID` is correct
- Check GoHighLevel API status
- Review Vercel function logs for API errors

---

## 📊 Monitoring

### **Vercel Dashboard**
- Monitor deployment status
- Check function logs for errors
- Review analytics and performance

### **GoHighLevel Dashboard**
- Verify contacts are being created
- Check contact tags and categorization
- Review contact sources

### **Strapi Dashboard**
- Admin URL: `https://usable-purpose-b78d93dac8.strapiapp.com/admin`
- Credentials: `developer@tin.info` / `Secure@2026`
- Manage blog articles and content

---

## 🎯 Expected Results

After successful deployment:

✅ **Website loads correctly** on production domain  
✅ **All pages accessible** (Home, About, Services, Industries, etc.)  
✅ **Contact form** creates contacts in GoHighLevel with proper tags  
✅ **Partnership form** creates contacts in GoHighLevel with proper tags  
✅ **Joey booking form** creates contacts in GoHighLevel with proper tags  
✅ **Insights/Blog** displays articles from Strapi CMS  
✅ **Dynamic routes** work correctly (article detail pages)  
✅ **No validation errors** in form submissions  

---

## 📞 Support

If you encounter any issues during deployment:

1. Check Vercel deployment logs first
2. Verify all environment variables are set correctly
3. Review the documentation files in the repository:
   - `GHL_LOCAL_TEST_RESULTS.md` - Test results and GHL API details
   - `FORM_FIELD_FIXES.md` - Form field requirements
   - `GHL_INTEGRATION_COMPLETE.md` - GHL integration details

---

## 🎉 Success Criteria

Deployment is successful when:

✅ No build errors in Vercel  
✅ All environment variables configured  
✅ Website loads without errors  
✅ All forms submit successfully  
✅ Contacts appear in GoHighLevel  
✅ Insights page loads articles  

---

**Ready to Deploy!** 🚀

All code is committed to GitHub and ready for Vercel deployment. Simply add the environment variables and let Vercel handle the rest!
