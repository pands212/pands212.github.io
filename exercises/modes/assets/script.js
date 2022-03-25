var anythingIWant = document.body;
var isDark = false;


// if i clicke the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

// background color changes
// text color changes
function changeToDarkMode() {  
  if(isDark === true) {
    
    darkModeButton.textContent = "dark mode"
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off.");
  } else if(isDark === false){
    darkModeButton.textContent = "light mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on!");
  }
}

const button = document.getElementById("colorchange");
const body = document.body;

const colors = ['blue', 'pink', 'green', 'red', 'orange', 'purple']
button.addEventListener('click',changeBackground)

function changeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}


var wrapper = document.getElementById("wrapper");

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list")) return;


  event.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", function (event) {
  if (!event.target.matches(".grid")) return;

  event.preventDefault();
  wrapper.classList.remove("list");
});

const topbutton = document.querySelector("#topbutton");
topbutton.addEventListener("click", function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
});
