// read the saved database string in browser memory
const storedInventory = localStorage.getItem("homeInventory")

// convert the string into a database
newHomeInventory = JSON.parse(storedInventory)

// additional inventory objects
const wallUnit = {
    "name": "King Wall Unit Bed",
    "type": "furniture",
    "location": "Master Bedroom",
    "description": "Large wall unit headboard"
  }

  const rolePlayingGames = {
    "name": "Role Playing Games",
    "type": "collection",
    "location": "loft",
    "description": "Collection of old Dungeon & Dragons materials"
  }

  const pamperedChefPans = {
    "name": "Pampered Chef Pans",
    "type": "utensils",
    "location": "Kitchen Cabinets",
    "description": "Variety of Pampered Chef Pots and Pans"
  }

  const womensShoes = {
    "name": "women's shoes",
    "type": "clothing",
    "location": "Master Bedroom Closet",
    "description": "women's shoes"
  }

  const rokuBox = {
    "name": "Roku Box",
    "type": "electronics",
    "location": "Living Room",
    "description": "media streaming player"
  }

  const toolBox = {
    "name": "Toolbox",
    "type": "tools",
    "location": "Garage",
    "description": "Toolbox containing various tools"
  }

// update the inventory type arrays with the new inventory objects
furniture.push(wallUnit)
collection.push(rolePlayingGames)
utensils.push(pamperedChefPans)
clothing.push(womensShoes)
tools.push(toolBox)
electronics.push(rokuBox)

// update inventory database with updated inventory type arrays
newHomeInventory.furniture = furniture
newHomeInventory.collection = collection
newHomeInventory.electronics = electronics
newHomeInventory.utensils = utensils
newHomeInventory.clothing = clothing
newHomeInventory.tools = tools

// test - print updated database in console
console.log("Updated inventory is ",newHomeInventory)

 // convert inventory database into string and re-save in browser memory
 const newHomeInventoryString = JSON.stringify(newHomeInventory)
 localStorage.setItem("homeInventory", newHomeInventoryString)