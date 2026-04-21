const axios = require('axios');
const API_KEY = "4b387e9a0a564cc5ba0c1c4d80eedd90";

async function test() {
  const urlCats = `https://api.worldnewsapi.com/search-news?language=en&source-countries=us&api-key=${API_KEY}&categories=health&number=1`;
  const urlText = `https://api.worldnewsapi.com/search-news?language=en&source-countries=us&api-key=${API_KEY}&text=health&number=1`;

  try {
    let r1 = await axios.get(urlCats);
    console.log("Response with &categories=health:");
    console.log("Title: " + r1.data.news[0]?.title);
    
    let r2 = await axios.get(urlText);
    console.log("\nResponse with &text=health:");
    console.log("Title: " + r2.data.news[0]?.title);
  } catch (e) {
    console.log(e.response?.data?.message || e.message);
  }
}
test();
