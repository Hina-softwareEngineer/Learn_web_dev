function* printvalues(){
	yield "hina";
	yield 'software';
}

printvalues.next()
//-----------------------//

//		Object.assign

var o={name:"Elie"}
var o2=0
o2.name="Time"

o.name// Time          // to fix this by using below

var o2=Object.assign({},o);

o2.name="Time"
o.name// 'Elie'

//		Array.from

Array.from(firstSet);

// 		find

instructors.find(function(val){
	return val.name;
});

// 		findIndex(),includes(),indexOf(),Number.isFinite

function copyObject(obj){
  return Object.assign({}, obj)
}

function checkIfFinite(num){
  return Number.isFinite(num)
}

function areAllNumbersFinite(arr){
  return arr.every(Number.isFinite)
}

function convertArrayLikeObject(obj){
  return Array.from(obj)
}

function displayEvenArguments(){
  return Array.from(arguments).filter(val => val % 2 === 0);
}