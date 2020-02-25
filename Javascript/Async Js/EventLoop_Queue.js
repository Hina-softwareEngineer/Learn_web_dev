function square(n){
	return n*n;
}

setTimeout(function () {
	console.log("Callback is placed on the queue.");
},0);

console.log(square(2));