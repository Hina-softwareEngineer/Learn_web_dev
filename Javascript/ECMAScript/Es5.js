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
  multiplyFavoriteNumber(num){
    return num * this.favoriteNumber;
  }
  addToFamily(obj){
    if(obj.constructor === Person && this.family.indexOf(obj) === -1){
      this.family.push(obj)
    }
    return this.family
  }
}