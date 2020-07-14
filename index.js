const fetch = require("node-fetch")
const axios = require('axios')

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
  const desiredStyleId = styles.find((style) => style.name.includes("Flags"))
  console.log(desiredStyleId.id) // storing colour id

  //const sizes = styles[0].sizes
  const test = desiredStyleId.sizes.find((size) => size.name.includes("Medium"))
  const desiredSize = test
  console.log(desiredSize.id) // storing size id

  console.log("Trying add to cart")

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    }
  }

  console.log(itemId)

  axios.post(`https://www.supremenewyork.com/shop/${itemId}/add.json`,
  {
    size: desiredSize.id,
    style: desiredStyleId.id,
    qty: 1,
  }, config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
    console.log("ERROR");
  });

}).catch(err => console.error(err))
}).catch(err => console.error(err))

