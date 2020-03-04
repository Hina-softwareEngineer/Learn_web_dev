class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
class Student extends Person{
  super(firstName,lastName,favoriteNumber,favoriteColor);
}
//--------------------------------------//

class Vehicle {
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(){
    return "VROOM!"
  }
  toString(){
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(){
    super(...arguments)
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(){
    super(...arguments)
    this.numWheels = 2;
  }
}