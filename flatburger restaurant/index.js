
const burgers = ["hamburger", "cheeseburger"];
let drink = "milkshake";

// Function to update featured item 
function featuredMenu() {
  var featured = "double cheeseburger"; // function-scoped
  return `Today's special is ${featured} with a ${drink}`;
}

// Block-scoped function
function addNewBurger() {
  if (true) {
    let newBurger = "veggie burger"; // block-scoped
    burgers.push(newBurger);
  }
}

// Call functions to test
console.log(burgers);           
console.log(featuredMenu());    
console.log(burgers);           