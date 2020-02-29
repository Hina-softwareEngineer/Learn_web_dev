function Person(name){
	this.name=name;
}

//----------------//
Person.prototype
//{constructor: ƒ}constructor: ƒ Person(name)length: 1name: "Person"arguments: nullcaller: nullprototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM186:1[[Scopes]]: Scopes[2]__proto__: Object
var elie=new Person("Elie");
//undefined
elie.constructor
// ƒ Person(name){
// 	this.name=name;
//}
elie.__proto__
//{constructor: ƒ}
Person.__proto__
//ƒ () { [native code] }
elie.__proto__===Person.prototype
//true
elie.__proto__===Person.__proto__
//false
Person.__proto__
//ƒ () { [native code] }
Person.prototype.constructor
// ƒ Person(name){
// 	this.name=name;
// }
Person.prototype.constructor===Person
//true

//-------------------------//
function Vehicle(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	isRunning=false;
}
var v1=Vehicle();
v1.prototype.turnOn=function(){
	this.isRunning:true;
}

//------------------------------------//

// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

// Add a property on the Person object called family which is an empty array.

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should the length of the family array.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person)
    }
    return this.family.length;
}

// Part II:

// Make the tests pass for the following tasks:

// Implement your own version of Array.prototype.map

Array.prototype.map = function(callback){
  var newArr = [];
  for(var i = 0; i < this.length; i++){
    newArr.push(callback(this[i], i, this))
  }
  return newArr;
}

// Implement a function that reverses a string and place it on the String.prototype

String.prototype.reverse = function(){
  var newStr = '';
  for(var i = this.length -1; i >= 0; i--){
    newStr += this[i]
  }
  return newStr;
}