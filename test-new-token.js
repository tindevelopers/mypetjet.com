// Test the new Strapi API token
const NEW_TOKEN = "4cc8314ac7979f5db3222b30a8eed24491553c3f5823b66bb6b0baf2a6c49fb662592879e293fb783f74b58a1fdb89758e799a54140ef881522e6a8fa146ec6ea867264492a35ebf8f28c68817e84472dad7e458b9a987ce1cf8985093ded402c7d33703f825ce916c907bf6982ec768547dc6c410a04c9e58577b2a5d0f5490";
const URL = "https://strapi-app-production-77b3.up.railway.app";

async function testNewToken() {
  console.log("Testing new Strapi API token...\n");
  
  try {
    const response = await fetch(`${URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=1`, {
      headers: {
        'Authorization': `Bearer ${NEW_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`Status: ${response.status} ${response.statusText}`);
    const text = await response.text();
    
    if (response.status === 200) {
      console.log("✅ Token is VALID!");
      console.log(`Response preview: ${text.substring(0, 300)}`);
      return true;
    } else {
      console.log("❌ Token is INVALID");
      console.log(`Response: ${text.substring(0, 500)}`);
      return false;
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return false;
  }
}

testNewToken().then(valid => {
  process.exit(valid ? 0 : 1);
});

