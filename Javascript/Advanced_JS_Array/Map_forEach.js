function forEach(array,callback){
	for (var i=0;i<array.length;i++){
		callback(array[i],i,arr);
	}
};

//-----------------
var arr=[1,2,3];

arr.forEach(function (value) {// args maybe val,ind,arr
	// body...
	console.log(value);
});

//------------MAP------//


function map(arr,callback){
	var newArr=[];
	for (var i=0;i<arr.length;i++){
		newArr.push(callback(arr[i],i,arr));
	}
	return newArr;
}

//-----------------------
// Map is very helpful in accessing values from objects.

function tripleValues(arr){
	return arr.map(function (value) {
		// body...
		return arr*3;
	})
}

//--------------------------------------

function doubleValues(arr){
	return arr.map(function (value){
		return val*2;
	});
}

function valTimesIndex(arr){
	return arr.map(function (val,ind){
		return val*ind;
	})
}

function extractKey(arr,key){
	return arr.map(function (val) {
		// body...
		return val[key];
	})
}

function extractFullName(arr){
	return arr.map(function(val){
		return val.first+" "+val.last;
	})
}