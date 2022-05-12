console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({ apiKey: "keyuD1kyyHmhwrdpU" }).base(
  "apppCmCEXnY57et85"
);

base("shoes").select({view: 'Grid 7'
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

    // let shoesDescription = document.createElement("div");
    // shoesDescription.classList.add("shoes-description");
    // document.querySelector(".container-description").append(shoesDescription);

    // let shoesBrand = document.createElement("p");
    // shoesBrand.classList.add("shoes-brand");
    // shoesBrand.innerHTML = shoes.fields.brand;
    // shoesDescription.append(shoesBrand);

    // let shoesMaterialcolor = document.createElement("p");
    // shoesMaterialcolor.classList.add("shoes-materialcolor");
    // shoesMaterialcolor.innerHTML = shoes.fields.materialcolor;
    // shoesDescription.append(shoesMaterialcolor);

    // let shoesHeelsize = document.createElement("p");
    // shoesHeelsize.classList.add("shoes-heelsize");
    // shoesHeelsize.innerHTML = shoes.fields.heelsize;
    // shoesDescription.append(shoesHeelsize);

    // const slugify = function(name) {
    //   return name.toLowerCase().replaceAll(' ', '-');
    // };
    
    // // clean up names of tags to be lower case without spaces
    // let decades = shoes.fields.decades;
    // decades.forEach(function(decades) {
    //   let decadesClassName = slugify(decades);
    //   console.log('decadesClassName', decadesClassName);
    //   shoesContainer.classList.add(decadesClassName);
    // });
    
    // // add event listener to our filter to add an active class to our video
    // let filterNineties = document.querySelector(".nineties");
    // let ninetiesButton = document.querySelector(".ninetiesbutton");
    // filterNineties.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("nineties")) {
    //     classContainer.style.display = "block";
    //     ninetiesButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //   }
    // });

    // let filterTwothousands = document.querySelector(".twothousands");
    // let twothousandsButton = document.querySelector(".twothousandsbutton");
    // filterTwothousands.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousands")) {
    //     classContainer.style.display = "block";
    //     twothousandsButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     ninetiesbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandone = document.querySelector(".twothousandone");
    // let twothousandoneButton = document.querySelector(".twothousandonebutton");
    // filterTwothousandone.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandone")) {
    //     classContainer.style.display = "block";
    //     twothousandoneButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandsbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandfive = document.querySelector(".twothousandfive");
    // let twothousandfiveButton = document.querySelector(".twothousandfivebutton");
    // filterTwothousandfive.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandfive")) {
    //     classContainer.style.display = "block";
    //     twothousandfiveButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandonebutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandnine = document.querySelector(".twothousandnine");
    // let twothousandnineButton = document.querySelector(".twothousandninebutton");
    // filterTwothousandnine.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandnine")) {
    //     classContainer.style.display = "block";
    //     twothousandnineButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandfivebutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandten = document.querySelector(".twothousandten");
    // let twothousandtenButton = document.querySelector(".twothousandtenbutton");
    // filterTwothousandten.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandten")) {
    //     classContainer.style.display = "block";
    //     twothousandtenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandninebutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandtwelve = document.querySelector(".twothousandtwelve");
    // let twothousandtwelveButton = document.querySelector(".twothousandtwelvebutton");
    // filterTwothousandtwelve.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandtwelve")) {
    //     classContainer.style.display = "block";
    //     twothousandtwelveButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandtenbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandfourteen = document.querySelector(".twothousandfourteen");
    // let twothousandfourteenButton = document.querySelector(".twothousandfourteenbutton");
    // filterTwothousandfourteen.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandfourteen")) {
    //     classContainer.style.display = "block";
    //     twothousandfourteenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandtwelvebutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandsixteen = document.querySelector(".twothousandsixteen");
    // let twothousandsixteenButton = document.querySelector(".twothousandsixteenbutton");
    // filterTwothousandsixteen.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandsixteen")) {
    //     classContainer.style.display = "block";
    //     twothousandsixteenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandfourteenbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandseventeen = document.querySelector(".twothousandseventeen");
    // let twothousandseventeenButton = document.querySelector(".twothousandseventeenbutton");
    // filterTwothousandseventeen.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandseventeen")) {
    //     classContainer.style.display = "block";
    //     twothousandseventeenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandsixteenbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandeighteen = document.querySelector(".twothousandeighteen");
    // let twothousandeighteenButton = document.querySelector(".twothousandeighteenbutton");
    // filterTwothousandeighteen.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandeighteen")) {
    //     classContainer.style.display = "block";
    //     twothousandeighteenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandseventeenbutton.classList.remove("active");
    //   }
    // });

    // let filterTwothousandnineteen = document.querySelector(".twothousandnineteen");
    // let twothousandnineteenButton = document.querySelector(".twothousandnineteenbutton");
    // filterTwothousandnineteen.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandnineteen")) {
    //     classContainer.style.display = "block";
    //     twothousandnineteenButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandeighteenbutton.classList.remove("active");
    //   }
    // });


    // let filterTwothousandtwenty = document.querySelector(".twothousandtwenty");
    // let twothousandtwentyButton = document.querySelector(".twothousandtwentybutton");
    // filterTwothousandtwenty.addEventListener("click", function(){
    //   if (shoesContainer.classList.contains("twothousandtwenty")) {
    //     classContainer.style.display = "block";
    //     twothousandtwentyButton.classList.add("active");
    //   } else {
    //     shoesContainer.style.display = "none";
    //     twothousandtwentybutton.classList.remove("active");
    //   }
    // });
  });
}
