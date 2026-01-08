// Test GoHighLevel API connection with actual credentials
const GHL_API_KEY = 'pit-0af5c3fc-3beb-4ca9-82e3-c1eaac125834';
const GHL_LOCATION_ID = 'D5ekkhuWoyArzhJUs67n';
const BASE_URL = 'https://services.leadconnectorhq.com';

async function testGHLAPI() {
  console.log("🔍 Testing GoHighLevel API Connection\n");
  console.log("=".repeat(60));
  
  console.log("\n1️⃣ Testing API Endpoint...");
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
      return false;
    } else if (response.status === 400) {
      console.log(`   ⚠️  API responded but validation failed (400)`);
      console.log(`   This might be expected if test contact already exists`);
      console.log(`   Response: ${JSON.stringify(responseData).substring(0, 300)}`);
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
    console.log("   Forms will now submit to GoHighLevel CRM.");
  } else {
    console.log("\n⚠️  GHL API connection test failed.");
    console.log("   Please verify your API key and Location ID.");
  }
  process.exit(success ? 0 : 1);
});

