console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({ apiKey: "keyuD1kyyHmhwrdpU" }).base(
  "apppCmCEXnY57et85"
);

base("shoes").select({view: 'Grid 3'
}).eachPage(gotPageOfShoes, gotAllShoes);

let shoes = [];

function gotPageOfShoes(records,
  fetchNextPage){
    console.log("gotPageOfShoes()");
    shoes.push(...records);
    fetchNextPage();
  }

function gotAllShoes(err) {
  console.log("gotAllShoes()");

  if (err) {
    console.log("error loading shoes");
    console.error(err);
    return;
  }

  consoleLogShoes();
  showShoes();
}

function consoleLogShoes() {
  console.log("consoleLogShoes()");
  shoes.forEach((shoes) => {
    console.log("Shoes:", shoes);
  });
}

function showShoes() {
  console.log("showShoes()");
  shoes.forEach((shoes) => {
    // let shoesTextHolder = document.createElement("div");
    // shoesTextHolder.classList.add("entry");
    // shoesTextHolder.innerText = shoes.fields.decade;
    //  wrapper.appendChild(shoesTextHolder);

    //  let imageHolder = document.createElement("img");
    //  imageHolder.src = shoes.fields.atachment[0].url;
    //  shoesTextHolder.appendChild(imageHolder);

    let shoesContainer = document.createElement("div");
    shoesContainer.classList.add("shoes-container");
    document.querySelector(".container").append(shoesContainer);

    var colors = ["#7200dd","#9E3939", "#F611A9", "#F06A57", "#7000FF", "#0080FF", "#F460FF", "#A81201", "#93D704", "#AAECEB", "#58D4F8", "#FF0056", "#FFFF01", "#028D00"];
    shoesContainer.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


    let shoesImage = document.createElement("img");
    shoesImage.classList.add("shoes-image");
    shoesImage.src = shoes.fields.atachment[0].url;
    document.querySelector(".container").append(shoesContainer);
    shoesContainer.append(shoesImage);
    shoesImage.addEventListener("click", function(){
      shoesDescription.style.display = "block";
      $(".shoes-image").addClass("selected");
      $(".shoes-image").not(".selected").addClass("blur");
    });
  });
}


