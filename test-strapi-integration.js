// Comprehensive Strapi integration test
const STRAPI_URL = "https://strapi-app-production-77b3.up.railway.app";
const TOKEN = "4cc8314ac7979f5db3222b30a8eed24491553c3f5823b66bb6b0baf2a6c49fb662592879e293fb783f74b58a1fdb89758e799a54140ef881522e6a8fa146ec6ea867264492a35ebf8f28c68817e84472dad7e458b9a987ce1cf8985093ded402c7d33703f825ce916c907bf6982ec768547dc6c410a04c9e58577b2a5d0f5490";

async function testStrapiIntegration() {
  console.log("🔍 Testing Strapi Backend Integration\n");
  console.log("=" .repeat(60));
  
  const tests = [];
  
  // Test 1: API Health Check
  console.log("\n1️⃣ Testing API Health Check...");
  try {
    const healthResponse = await fetch(`${STRAPI_URL}/api`, {
      headers: { 'Content-Type': 'application/json' }
    });
    tests.push({
      name: "API Health Check",
      status: healthResponse.status,
      success: healthResponse.status < 500,
      details: `Status: ${healthResponse.status} ${healthResponse.statusText}`
    });
    console.log(`   ✅ API is reachable (${healthResponse.status})`);
  } catch (error) {
    tests.push({
      name: "API Health Check",
      success: false,
      details: error.message
    });
    console.log(`   ❌ API unreachable: ${error.message}`);
  }
  
  // Test 2: Articles Endpoint with Token
  console.log("\n2️⃣ Testing Articles Endpoint with Authentication...");
  try {
    const articlesResponse = await fetch(
      `${STRAPI_URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=5&sort=publishedAt:desc`,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const articlesData = await articlesResponse.json();
    tests.push({
      name: "Articles Endpoint",
      status: articlesResponse.status,
      success: articlesResponse.status === 200,
      details: `Status: ${articlesResponse.status}, Articles found: ${articlesData?.data?.length || 0}`
    });
    
    if (articlesResponse.status === 200) {
      console.log(`   ✅ Successfully fetched articles (${articlesData?.data?.length || 0} articles)`);
      if (articlesData?.data?.length > 0) {
        console.log(`   📄 Sample article: "${articlesData.data[0].attributes?.title || 'N/A'}"`);
      } else {
        console.log(`   ℹ️  No articles found (this is normal if none have been created yet)`);
      }
    } else {
      console.log(`   ❌ Failed: ${articlesResponse.status} ${articlesResponse.statusText}`);
      console.log(`   Response: ${JSON.stringify(articlesData).substring(0, 200)}`);
    }
  } catch (error) {
    tests.push({
      name: "Articles Endpoint",
      success: false,
      details: error.message
    });
    console.log(`   ❌ Error: ${error.message}`);
  }
  
  // Test 3: Test the same endpoint structure used by the app
  console.log("\n3️⃣ Testing Exact Endpoint Used by Next.js App...");
  try {
    const appEndpoint = `${STRAPI_URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=12&sort=publishedAt:desc`;
    const appResponse = await fetch(appEndpoint, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    const appData = await appResponse.json();
    tests.push({
      name: "App Endpoint (exact match)",
      status: appResponse.status,
      success: appResponse.status === 200,
      details: `Status: ${appResponse.status}, Data structure: ${appData?.data ? 'valid' : 'invalid'}`
    });
    
    if (appResponse.status === 200) {
      console.log(`   ✅ App endpoint works correctly`);
      console.log(`   📊 Response structure: ${appData?.data ? 'Valid' : 'Invalid'}`);
      console.log(`   📄 Articles count: ${appData?.data?.length || 0}`);
      if (appData?.meta?.pagination) {
        console.log(`   📈 Pagination: Page ${appData.meta.pagination.page} of ${appData.meta.pagination.pageCount}`);
      }
    } else {
      console.log(`   ❌ Failed: ${appResponse.status}`);
    }
  } catch (error) {
    tests.push({
      name: "App Endpoint",
      success: false,
      details: error.message
    });
    console.log(`   ❌ Error: ${error.message}`);
  }
  
  // Test 4: Verify token format
  console.log("\n4️⃣ Verifying Token Format...");
  const tokenLength = TOKEN.length;
  const hasSpaces = TOKEN.includes(' ');
  const hasNewlines = TOKEN.includes('\n');
  tests.push({
    name: "Token Format",
    success: tokenLength > 0 && !hasSpaces && !hasNewlines,
    details: `Length: ${tokenLength}, Has spaces: ${hasSpaces}, Has newlines: ${hasNewlines}`
  });
  
  if (tokenLength > 0 && !hasSpaces && !hasNewlines) {
    console.log(`   ✅ Token format is valid (${tokenLength} characters)`);
  } else {
    console.log(`   ⚠️  Token format issues detected`);
  }
  
  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("\n📊 Test Summary:");
  const passed = tests.filter(t => t.success).length;
  const total = tests.length;
  console.log(`   ✅ Passed: ${passed}/${total}`);
  console.log(`   ❌ Failed: ${total - passed}/${total}`);
  
  tests.forEach((test, i) => {
    const icon = test.success ? "✅" : "❌";
    console.log(`   ${icon} ${test.name}: ${test.details}`);
  });
  
  console.log("\n" + "=".repeat(60));
  
  if (passed === total) {
    console.log("\n🎉 All tests passed! Strapi integration is working correctly.");
    return true;
  } else {
    console.log("\n⚠️  Some tests failed. Please review the details above.");
    return false;
  }
}

testStrapiIntegration().then(success => {
  process.exit(success ? 0 : 1);
});

