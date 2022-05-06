const imageArray = [
    "images/shape1.svg",
    "images/shape2.svg",
    "images/shape3.svg",
    "images/shape4.svg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
var colors = ["#7200dd","#9E3939", "#F611A9", "#F06A57", "#7000FF", "#0080FF", "#F460FF", "#A81201", "#93D704", "#AAECEB", "#58D4F8", "#FF0056", "#FFFF01", "#028D00"];
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

