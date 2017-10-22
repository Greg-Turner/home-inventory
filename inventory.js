// define arrays of types of inventory
let furniture = []
let collection = []
let utensils = []
let clothing = []
let tools = []
let electronics = []

// 10 different objects
const sleeperSofa = {
    "name": "Sleeper Sofa",
    "type": "furniture",
    "location": "bonus room",
    "description": "Primarily a sofa in the bonus roon, it serves as an additional bed for guests."
  }
  
  const diningTable = {
    "name": "Dining Table",
    "type": "furniture",
    "location": "Dining Room",
    "description": "Easily accommodates our family of six"
  }

  const coinCollection = {
    "name": "Coin Collection",
    "type": "collection",
    "location": "Master Bedroom Closet",
    "description": "Contains a few older US coins but primarily made up of old coins from around the world"
  }

  const china = {
    "name": "China",
    "type": "utensils",
    "location": "Kitchen Cabinets",
    "description": "china inherited from Grandma Turner"
  }

  const silverware = {
    "name": "Silverware",
    "type": "utensils",
    "location": "Kitchen Cabinets",
    "description": "silverware inherited from Nana Daugherty"
  }

  const ties = {
    "name": "Ties",
    "type": "clothing",
    "location": "Master Bedroom Closet",
    "description": "various neckties"
  }

  const leatherJacket = {
    "name": "Leather Jacket",
    "type": "clothing",
    "location": "Front Hall Closet",
    "description": "black leather jacket"
  }

  const homePC = {
    "name": "Home PC",
    "type": "electronics",
    "location": "loft",
    "description": "Home Desktop Computer"
  }

  const flatscreenTV = {
    "name": "Flatscreen TV",
    "type": "electronics",
    "location": "Living Room",
    "description": "Family's main television"
  }

  const chainSaw = {
    "name": "Chainsaw",
    "type": "tools",
    "location": "Garage",
    "description": "Electric chainsaw"
  }

// populate the inventory type arrays with inventory objects
furniture.push(sleeperSofa)
furniture.push(diningTable)
collection.push(coinCollection)
utensils.push(china)
utensils.push(silverware)
clothing.push(ties)
clothing.push(leatherJacket)
tools.push(chainSaw)
electronics.push(flatscreenTV)
electronics.push(homePC)

// populate inventory database with inventory type arrays
let homeInventory = {
    "furniture": furniture,
    "collection": collection,
    "electronics": electronics,
    "utensils": utensils,
    "clothing": clothing,
    "tools": tools
  }
  
// test - print database in console
console.log("Initial inventory is ",homeInventory)

// convert inventory database into string saved in browser memory
const homeInventoryString = JSON.stringify(homeInventory)
localStorage.setItem("homeInventory", homeInventoryString)
 