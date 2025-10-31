
/*

webpage 16*16 grid <>
container div <>
Flex-box <>
pseudo-class:hover <>
change color <>
button -> prompt user -> new grid
randomize square's color with each interaction <>
progressive darkening <>
CSS opacity <>
 
*/

function randomColor() {
	
	let rgb = '';
	return rgb = `rgb(${Math.floor(Math.random() * 255)} 
	${Math.floor(Math.random() * 255)} 
	${Math.floor(Math.random() * 255)}`;
}

function createGrid(input) {

	let squareGrid = input;
	let width = 1000 / (squareGrid);
	let minWidth = width - 1 ;
	let opacity = 0.5;

	for (let i = 1; i <= squareGrid; i++) {
		for (let j = 1; j <= squareGrid; j++){

			let div  = document.createElement("div");
			div.classList.add("square");
			div.style.backgroundColor = randomColor();
			div.style.border = "0.25px solid black";
			div.style.flex = 1;
			div.style.width = width;
			div.style.height = "auto";
			div.style.minWidth = `${minWidth}px`;
			div.style.opacity = `${opacity}`;
			container.appendChild(div);
		}
	}
	hoverAction();
}


function hoverAction() {

	const hover = document.querySelectorAll(".square");
	for (let i = 0; i < hover.length; i++){

		hover[i].addEventListener("mouseout", () => {
			let opacity = Number(window.getComputedStyle(hover[i],null).getPropertyValue("opacity"));
			opacity += 0.05;
			if (opacity === 1) 
				hover[i].style.backgroundColor = "black";
			else 
			hover[i].style.opacity = `${opacity}`;
		});
	}
}

function deleteGrid() {
	const del = document.querySelectorAll(".square");
	
	for (let i = 0; i < del.length; i++)
		container.removeChild(del[i]);
}

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

let squareGrid;
let width ;
let minWidth ;
let opacity ;

btn.addEventListener("click", () => {
	input = prompt("How many squares do you want ? <0-24>");
	deleteGrid();
	createGrid(input);
});




// for (let i = 0; i < hover.length; i++){
// 	hover[i].addEventListener("mouseover", () => {
// 		hover[i].style.backgroundColor = randomColor();
// 	});
// }