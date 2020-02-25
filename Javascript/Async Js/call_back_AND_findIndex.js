function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // Callback function is invoked
  console.log("Callback has been invoked");
}

higherOrder(callback);

// -------------------------------------//

function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Hina", upperCaseName);

// ----------------------------------//

function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Hina", function(name) {
  return name.toUpperCase();
});

greet("Hina", function(name) {
  return name + "!!!!!";
});

// ------------------------------//

 var arr = [1,2,3,4,5,6];
 forEach(arr, function(number) {
     console.log(number * 2);
 });

 // -------------------------------//

 var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {  
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

// ---------------------------------//

var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  return lang === "JavaScript";
});

// ---------------------------------//

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
// ---------------------------------//


