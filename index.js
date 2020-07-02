const fetch = require("node-fetch")

// Fetching item from json

fetch("https://www.supremenewyork.com/mobile_stock.json")
  .then(res => res.json())   
     .then((out) => {
  const newCategory = out.products_and_categories.new
      // Defining variable as our desirable product
  const desiredItem = newCategory.find((item) => item.name.includes("Motion"))
      // Defining variable with id of our product
  const itemId = desiredItem.id          
      // Fetching more info about the product
fetch(`https://www.supremenewyork.com/shop/${itemId}.json`)
.then(res => res.json())
.then((out) => {
  const styles = out.styles
  const desiredStyleId = styles.find((style) => style.name.includes("Black"))
  console.log(desiredStyleId.id) // storing colour id
  const sizes = styles[0].sizes
  const test = sizes.find((size) => size.name.includes("XLarge")) 
  const desiredSize = test
  console.log(desiredSize.id) // storing size id
}).catch(err => console.error(err))
}).catch(err => console.error(err))