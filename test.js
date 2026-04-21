const axios = require('axios');
axios.get('https://api.worldnewsapi.com/search-news?language=en&source-countries=us&api-key=4b387e9a0a564cc5ba0c1c4d80eedd90&number=1')
  .then(r => console.log(JSON.stringify(r.data.news[0], null, 2)))
  .catch(e => console.log("ERROR", e.message));
