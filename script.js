// use variables to simplify your life!
var t = document.getElementById("truck");
var g = document.getElementById("gorillaz");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var band = document.getElementById("band");

// functions for the faces
function changeImage1(){
	img1.src = "images/murdoc.gif";
	img1.classList.add("img1");
	img1.classList.remove("img");
}
function changeImage2(){
	img2.src = "images/2d.gif";
	img2.classList.add("img1");
	img2.classList.remove("img");
}
function changeImage3(){
	img3.src = "images/noodle.gif";
	img3.classList.add("img1");
	img3.classList.remove("img");
}
function changeImage4(){
	img4.src = "images/russel.gif";
	img4.classList.add("img1");
	img4.classList.remove("img");
}


// function for the truck
function engineStart(){
	t.src = "images/band_truck.gif";
	g.classList.add("color");
	t.classList.remove("truck");
	t.classList.add("truck2");
}

function mouseDown(el) {
	band.classList.add("img-2");
}
function mouseUp(el) {
	band.classList.remove("img-2");
}