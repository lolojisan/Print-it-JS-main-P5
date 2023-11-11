const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* Event Listener sur aroww left et arrow right */

let clickLeft = document.querySelector(".arrow_left");

clickLeft.addEventListener("click", () => {
	console.log("click left")
});

let clickRight = document.querySelector(".arrow_right");

clickRight.addEventListener("click", () => {
	console.log("click right")
});

/* Ajout bullet point selected */

let dotOnSlide = document.querySelectorAll(".dot");
dotOnSlide[0].classList.add("dot_selected")

/* */