var body = document.querySelector('body');


body.style.background = "linear-gradient(" + getRandom(360) + "deg, rgb(" + randomRGB() + "), rgb(" + randomRGB() + ")";
body.style.backgroundColor = "rgb(" + randomRGB() + ")";


function getRandom(upper, lower=0){
	var randomNum;
	if(lower === 0){ //0-upper limit
		randomNum = Math.random() * (upper + 1);
		randomNum = Math.floor(randomNum);
	} else{ //lower - upper range
		randomNum = Math.random() * (upper - lower) + lower;
		randomNum = Math.round(randomNum);
	}
	return randomNum;
}

function randomRGB(){
	var r = getRandom(255);
	var g = getRandom(255);
	var b = getRandom(255);
	// var rgb = r + ", " + g + ", " + b;
	console.log(r + ", " + g + ", " + b);
	return r + ", " + g + ", " + b;
}