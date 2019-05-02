const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";


function handleClick(){

	const hasClass = title.classList.contains(CLICKED_CLASS);

	if (hasClass) {
		title.classList.remove(CLICKED_CLASS);
	} else {
		title.classList.add(CLICKED_CALSS);
	}


/*
	const currentClassName = title.className ;

	if (currentClassName !== ClICKED_CLASS){
		// title.className = CLICKED_CLASS
		title.classList.add(CLICKED_CLASS);
	}
	else{
		title.className = "";
		title.classList.remo
	}*/
}
// much simplified
function handleClickByToggle(){
	title.classList.toggle(CLICKED_CLASS);
}

function init () {
	title.addEventListener("click", handleClick);
}








/*const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";


function handleClick(){
	const currentcolor = title.style.color;

	if (currentcolor === BASE_COLOR){
		title.style.color = OTHER_COLOR;
	}

	else {
		title.style.color = BASE_COLOR;
	}
}

function init(){
	title.style.color = BASE_COLOR;
	title.addEventListener("click", handleClick);
}

init()
*/




//const age = prompt("How old are you?");

const age = 245 
if(age >= 18 && age <= 21){
	console.log("you can drink but you prefer not to");
} else if(age > 21){
	console.log("you drink!!!");
} else {
 	console.log("you are too young to drink");
}





// if else, && : AND, || : OR 

const num = 10;
const condition = num === 10;

if(condition){
	console.log("Hi:")
} else if(condition === true){
	console.log("ham")
} else{
	console.log("ho")
}


// Adding Events  

//const title = document.querySelector("#title")

//function handleResize(){
//	console.log("It has been resized");
//}

//window.addEventListener("resize", handleResize);

//function handleClick() {
//	title.style.color = "red";
//}

//title.addEventListener("click", handleClick);



/*
const title = document.getElementById("title");

title.innerHTML = `${title.innerHTML} and it is from JS`
title.style.color = 'red';
document.title= " I own you now";
console.dir(title);


const titleBySelector = document.querySelector("#title");
*/
