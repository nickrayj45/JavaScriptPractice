// console.log("Hello")
// var a = 2;
// var b = 7;
// console.log(a * b);

var firstName = "Nick ";
var lastName = "Jaquez"
var age = 31;
var job = "Content Manager";

// var drink = age >=21 ? "beer" : "juice";
// console.log(drink);

if (age >= 21) {
  var drink = "beer";
} else {
  var drink = "juice";
}
console.log(drink)

console.log(firstName + lastName + " is " + age + " years old." + " He is a " + job + ".")

// for (var i=1; i < 10; i++) {
//     console.log(i)
// }

// var nick = {
//     name: "Nick",
//     yearOfBirth: 1989,
//     job: "Content Manager"
// }

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.lastName = "Jaquez";

var nick = new Person("Nick", 1989, "Content Manager");
console.log(nick)

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}

nick.calculateAge();

var michael = new Person("Michael", 1996, "Golf Worker");
console.log(michael)

michael.calculateAge();

var luis = new Person("Luis", 1962, "Golf Worker");
console.log(luis);

luis.calculateAge();