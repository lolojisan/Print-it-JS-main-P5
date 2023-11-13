const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/* variables */
let i = 0;
const clickLeft = document.querySelector(".arrow_left");
const clickRight = document.querySelector(".arrow_right");
const dotBox = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");


/* Event Listener sur aroww left et arrow right 
+ Ajout changement image + tagline */

clickLeft.addEventListener("click", () => {
	console.log("click left");
	i--;
	if (i === -1) {
	  i = slides.length - 1;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i)
});

clickRight.addEventListener("click", () => {
	console.log("click right");
	i++;
	if (i === slides.length) {
	  i = 0;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i)
});

/*Ajoutez bullet points*/

 for (let bp = 0; bp < slides.length; bp++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotBox.appendChild(dot);
  }

/* Ajout bullet point selected first slide */

const dotOnSlide = document.querySelectorAll(".dot");
dotOnSlide[0].classList.add("dot_selected")

// Fonction pour mettre à jour les bullets dynamiquement
function dynamicBullets(count) {
	dotOnSlide.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }





