const fetch = require("node-fetch")
const axios = require('axios');

// Fetching item from json

fetch("https://www.supremenewyork.com/mobile_stock.json")
  .then(res => res.json())   
     .then((out) => {
  const newCategory = out.products_and_categories.new
      // Defining variable as our desirable product
  const desiredItem = newCategory.find((item) => item.name.includes("Flags Rayon"))
      // Defining variable with id of our product
  const itemId = desiredItem.id          
      // Fetching more info about the product
fetch(`https://www.supremenewyork.com/shop/${itemId}.json`)
.then(res => res.json())
.then((out) => {
  const styles = out.styles
  const desiredStyleId = styles.find((style) => style.name.includes("Black"))
 // console.log(desiredStyleId.id) // storing colour id
  const sizes = styles[0].sizes
  const test = sizes.find((size) => size.name.includes("XLarge")) 
  const desiredSize = test
  //console.log(desiredSize.id) // storing size id

  console.log("Trying add to cart")

  const config = {
    headers: {'content-type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (iPhone9,3; U; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1'
  }}

  axios.post(`https://supremenewyork.com/shop/${itemId}/add.json`, 
  {
    style: desiredStyleId.id,
    size: desiredSize.id,
    qty: 1
  }, config)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}).catch(err => console.error(err))
}).catch(err => console.error(err))