const malScraper = require('mal-scraper')
 
const query = 'sakura'
 
malScraper.getResultsFromSearch(query)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))