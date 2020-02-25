var p1=new Promise(function (resolve,reject) {
	// resolve([1,2,3,4]);
	reject("Error");
});

p1.then(function(arr){
	console.log("Promise P1 resolve this data: ",arr);
}).catch(function(data){
	console.log("Promise p1 rejected : ",data);
});