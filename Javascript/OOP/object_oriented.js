//-----CONSTRUCTOR FUNCTION-----------//
function House(bedrooms,bathrooms,numsqft){
	this.bedrooms=bedrooms;
	this.bathrooms=bathrooms;
	this.numsqft=numsqft;
}

var firstHouse=new House(2,2,100);


// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function(num){
    return num * this.favoriteNumber;
  }
}
//---------------------------------------//
		//MULTIPLE CONSTRUCTORS//
function Car(make,model,year){
	this.make=make;
	this.model=model;
	this.year=year;
	this.numWheels=4;
}
function Motorcycle(make,model,year){
	Car.call(this,make,model,year)
	this.numWheels=2;
}
