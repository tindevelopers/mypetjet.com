// Test GoHighLevel API connection
const GHL_API_KEY = process.env.GHL_API_KEY || '';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || '';
const BASE_URL = 'https://services.leadconnectorhq.com';

async function testGHLAPI() {
  console.log("🔍 Testing GoHighLevel API Integration\n");
  console.log("=".repeat(60));
  
  // Check credentials
  console.log("\n1️⃣ Checking GHL Credentials...");
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.log("   ❌ GHL credentials NOT configured");
    console.log(`   GHL_API_KEY: ${GHL_API_KEY ? 'SET (' + GHL_API_KEY.substring(0, 10) + '...)' : 'NOT SET'}`);
    console.log(`   GHL_LOCATION_ID: ${GHL_LOCATION_ID ? 'SET (' + GHL_LOCATION_ID.substring(0, 10) + '...)' : 'NOT SET'}`);
    console.log("\n   ⚠️  Forms will NOT be submitted to GHL until credentials are set.");
    console.log("   Set these in Vercel: Settings → Environment Variables");
    return false;
  }
  console.log("   ✅ GHL credentials are configured");
  console.log(`   API Key: ${GHL_API_KEY.substring(0, 10)}...`);
  console.log(`   Location ID: ${GHL_LOCATION_ID.substring(0, 10)}...`);
  
  // Test API endpoint
  console.log("\n2️⃣ Testing GHL API Endpoint...");
  try {
    const testContact = {
      locationId: GHL_LOCATION_ID,
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      tags: ['Test Contact'],
    };
    
    const response = await fetch(`${BASE_URL}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(testContact),
    });
    
    const responseData = await response.json();
    
    if (response.status === 200 || response.status === 201) {
      console.log(`   ✅ API connection successful (${response.status})`);
      console.log(`   Contact ID: ${responseData.contact?.id || 'N/A'}`);
      return true;
    } else if (response.status === 401) {
      console.log(`   ❌ Authentication failed (401 Unauthorized)`);
      console.log(`   Response: ${JSON.stringify(responseData).substring(0, 200)}`);
      console.log("\n   ⚠️  Check your GHL_API_KEY - it may be invalid or expired");
      return false;
    } else if (response.status === 400) {
      console.log(`   ⚠️  API responded but validation failed (400)`);
      console.log(`   This might be expected if test contact already exists`);
      console.log(`   Response: ${JSON.stringify(responseData).substring(0, 200)}`);
      return true; // API is working, just validation issue
    } else {
      console.log(`   ❌ API error: ${response.status} ${response.statusText}`);
      console.log(`   Response: ${JSON.stringify(responseData).substring(0, 300)}`);
      return false;
    }
  } catch (error) {
    console.log(`   ❌ Connection error: ${error.message}`);
    return false;
  }
}

testGHLAPI().then(success => {
  console.log("\n" + "=".repeat(60));
  if (success) {
    console.log("\n✅ GHL API integration is ready!");
  } else {
    console.log("\n⚠️  GHL API integration needs configuration.");
    console.log("   Set GHL_API_KEY and GHL_LOCATION_ID in Vercel environment variables.");
  }
  process.exit(success ? 0 : 1);
});

