function counter(){
	var count=0;
	return function inner(){
		count++;
		return count;
	}
}

var counter1=counter()
counter1();

//---------------------------------------------//
function classroom(){
	var instructors=["elie","Tim"];
	return {
		getInstructors:function (){
			return instructors;
		},
		addInstructor:function(instructor){
			instructors.push(instructor);
			return instructors;
		}
	}
}

//--------------------------------------------//
function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
  }
  return a*b;
}

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
        if(!completed){
            guesses++
            if(guess === answer) {
                completed = true;
                return "You got it!"
            }
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
        }
        return "You are all done playing!"
    }
}

//------------------------THIS---------------------//
'use strict'

console.log(this);		//window
avr instructor="Elie";
window.instructor;  // Elie

var data={};
data.instructor="Elie";
function This(){
	this.person="Hina";
	return this;
}
This();//window

// IMplicit/object Binding
var person={
	firstname:"Elie",
	sayHi:function(){
		return "HI"+ this.firstname;
	},
	determinateContext:function(){
		return this===person;
	}
}
console.log(person);


//------------------------CALL-------------------//
var person={
	firstname:"Elie",
	sayHi:function(){
		return "HI"+ this.firstname;
	},
	determinateContext:function(){
		return this===person;
	},
	dog:{
		sayHello:function(){return this.firstname;},
		determinateContext:function(){return this===person;}}
}

person.dog.sayHello.call(person);

//--------------------APPLY.binD-------------------//

sumvalues.max.apply(this,[1,2,3,4]);
// Bind return a function

function addNumbers(a,b,c,d){return this.firstname+" calclulated "+(a+b+c+d);}
var elicCalc=addNumbers.bind(elie,1,2,3,4);
elicCalc();

var elicCalc=addNumbers.bind(elie,1,2);
elicCalc(3,4);

//-------------------------------//

function arrayFrom(arrayLikeObject){
	return [].slice.call(arrayLikeObject);
}

function sumEvenArguments(){
	var newArgs=[].slice.call(arguments);
	return newArgs.reduce(function(acc,next){
		if (next%2==0){
			return acc+next;
		}
		return acc;
	},0)
}