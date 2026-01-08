// Test script to diagnose Strapi connection
const TOKEN = "ed9df20336d2d30dee2199b8b2bc33d9eabe678ba142cf0f95aa29769dd7eb53758d7a0d39d0b17099bc6794b0517800d6a8b7fdcba9e873169fd15122e0896f4abdaca7566ffee31f3f450503d049c09a6639cf46b159f052d894e71d3c433153c15bf79f9fefeb53f151c77162e761aa7c2c6f2b6c2481bed5559fdefc2769";
const URL = "https://strapi-app-production-77b3.up.railway.app";

async function testConnection() {
  console.log("Testing Strapi API connection...\n");
  
  // Test 1: Without token
  console.log("1. Testing WITHOUT token:");
  try {
    const response1 = await fetch(`${URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=1`, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(`   Status: ${response1.status} ${response1.statusText}`);
    const text1 = await response1.text();
    console.log(`   Response: ${text1.substring(0, 200)}`);
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
  
  // Test 2: With token
  console.log("\n2. Testing WITH token:");
  try {
    const response2 = await fetch(`${URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=1`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(`   Status: ${response2.status} ${response2.statusText}`);
    const text2 = await response2.text();
    console.log(`   Response: ${text2.substring(0, 500)}`);
    
    if (response2.status === 401) {
      console.log("\n   ⚠️  401 Unauthorized - Token may be invalid or expired");
      console.log(`   Token length: ${TOKEN.length}`);
      console.log(`   Token preview: ${TOKEN.substring(0, 20)}...`);
    }
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
  
  // Test 3: Check if articles endpoint exists
  console.log("\n3. Testing articles endpoint structure:");
  try {
    const response3 = await fetch(`${URL}/api/articles`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(`   Status: ${response3.status} ${response3.statusText}`);
    const text3 = await response3.text();
    console.log(`   Response: ${text3.substring(0, 300)}`);
  } catch (error) {
    console.log(`   Error: ${error.message}`);
  }
}

testConnection();

