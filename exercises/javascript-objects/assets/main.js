
let fries = [
    {name: "In-N-Out", amount: 50},
    {name: "Dairy Queen Grill & Chill", amount: 80},
    {name: "Hardee's & Carl's Jr", amount: 80},
    {name: "Poppeyes", amount: 100},
    {name: "Burger King", amount: 200},
    {name: "White Castle", amount: 300},
    {name: "KFC", amount: 400},
    {name: "A&W", amount: 500},
    {name: "Whataburger", amount: 600},
    {name: "Taco Bell", amount: 700},
    {name: "Chik-fil-A", amount: 800},
    {name: "Mcdonald's", amount: 900},
    {name: "Arby's", amount: 1000}
    ];
  
    // One: Use the amount to indicate how big each circle is
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".fastfood");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  
  function displayFries(fries) {
    // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let friesDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("fries");
    // adds a specific class to each new div
    newItem.classList.add("fries" + [i]);
    // places the flower name and amount to the div
    friesDiv.innerHTML = fries.name + " – " + fries.amount;
    // sets height of flower to the amount. try changing height to width, or padding
    friesDiv.style.fontSize = fries.amount + "%";
    console.log(fries);
  }
  // loops through the flowers and runs the displayFlowers function for each one
  fries.forEach(displayFries);


