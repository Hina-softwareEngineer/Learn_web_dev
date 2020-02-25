var num=0;
setTimeout(function(){
	console.log("After 3 seconds.");
},3000);

var interval=setInterval(function(num=0){
	num++;
	if(num==10){
		clearInterval(interval);
	}
},2000);

// -----------------------------///

function countDown(seconds){
    var intervalId=setInterval(function(){
        seconds--;
        if (seconds >0){
            console.log("Timer: ",seconds);
}else{
console.log("Ring Ring Ring");
clearInterval(intervalId);}
},1000);
}

countDown(60);