var images = ["images/princephillip.jpeg",
"images/princephillipyass.jpeg",
"images/robpattyass.jpeg",
"images/robpatt.jpeg",
"images/gihun.jpeg",
"images/gihunyass.jpeg",
"images/getout.png",
"images/getoutyass.png",
"images/psycho.jpeg",
"images/pscyhoyas.jpeg"];
var index = 0;

function makeImage() {
   var img = document.createElement('img')
   img.src = images[index];
   document.getElementById('content').appendChild(img);
}

function nextImage(){
   var img = document.getElementById('content').getElementsByTagName('img')[0]
   index++;
   index = index % images.length; 
   img.src = images[index];
}

// let filterImages = ["images/pinksparkles.gif",
//   "images/lips.png",
//   "images/93fb017cf1b3ffaa16c265f184e8af09.gif",
//   "images/glitter.gif",
//   "images/leftnails.png",
//   "images/righteyelash.png",
//   "images/lefteyelash.png",
//   "images/crown.gif"
// ];
// let index = 0;


const box = document.querySelector(".filtercontainer"); 

// box.addEventListener("click", e => {
//     console.log(e);
//     box.style.backgroundImage = "url(images/pinksparkles.gif)";
// })

box.addEventListener("mouseover", e => {
    console.log(e);
    box.style.backgroundImage = "url(images/pinksparkles.gif)";
})
box.addEventListener("mouseleave", e => {
    console.log(e);
    box.style.backgroundImage = "none";
})






