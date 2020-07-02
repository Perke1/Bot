const fetch = require("node-fetch")

fetch("https://www.supremenewyork.com/mobile_stock.json")
  .then(res => res.json())   
     .then((out) => {
     const newCategory = out.products_and_categories.new
  const desiredItem = newCategory.find((item) => item.name.includes("Motion"))

  const itemId = desiredItem.id          


fetch(`https://www.supremenewyork.com/shop/${itemId}.json`)

.then(res => res.json())
.then((out) => {
  const styles = out.styles
  const desiredStyleId = styles.find((style) => style.name.includes("Black"))
  console.log(desiredStyleId.id)
  const sizes = out.styles.sizes
  const desiredSize = sizes.find((size) => size.includes("Small"))
  console.log(desiredSize)
}).catch(err => console.error(err))
}).catch(err => console.error(err))