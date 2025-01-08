//3rd New Binding
function Person1(name) {
  //this = {};   -> Here this will work as object and person will work as constructor function
  this.name = name;
}
const p1 = new Person1("Mohit");
const p2 = new Person1("Tayal");

console.log(p2.name, p1.name);

//-------------
//Prototype

function Person(fName, lName) {
  //constructor function
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Mohit", "Tayal");
const person2 = new Person("Tayal", "Mohit");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName()); // ->  Mohit Tayal
console.log(person2.getFullName()); // ->  Tayal Mohit

// Prototype Inheritence

function superHero(fName, lName) {
  //this = {}
  Person.call(this, fName, lName); // Inheriting object parameters
  this.isSuperHero = true;
}

superHero.prototype.fightCrime = function () {
  console.log("fighting crime");
};

superHero.prototype = Object.create(Person.prototype); //Inheriting prototype

const batman = new superHero("Bruce", "Wayne");

superHero.prototype.constructor = superHero;

console.log(batman.getFullName()); //-> Mohit Tayal
// console.log(fightCrime());


//another example

const animal = {
  species: "Unknown",
  sleep: function () {
    console.log(`${this.species} is sleeping.`);
  },
};

const dog = Object.create(animal);

dog.species = "Dog";

console.log(dog.species);
dog.sleep();
