// console.log("Hello")
// var a = 2;
// var b = 7;
// console.log(a * b);

// var firstName = "Nick ";
// var lastName = "Jaquez"
// var age = 31;
// var job = "Content Manager";

// var drink = age >=21 ? "beer" : "juice";
// console.log(drink);

// if (age >= 21) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }
// console.log(drink)

// console.log(firstName + lastName + " is " + age + " years old." + " He is a " + job + ".")

// for (var i=1; i < 10; i++) {
//     console.log(i)
// }

// var nick = {
//     name: "Nick",
//     yearOfBirth: 1989,
//     job: "Content Manager"
// }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.lastName = "Jaquez";

// var nick = new Person("Nick", 1989, "Content Manager");
// console.log(nick)

// Person.prototype.calculateAge = function() {
//     console.log(2020 - this.yearOfBirth)
// }

// nick.calculateAge();

// var michael = new Person("Michael", 1996, "Golf Worker");
// console.log(michael)

// michael.calculateAge();

// var luis = new Person("Luis", 1962, "Golf Worker");
// console.log(luis);

// luis.calculateAge();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Athlete extends Person {
//   constructor(name, sport, position) {
//     super(name)
//     this.sport = sport;
//     this.position = position;
//   }
//   classifyAthlete() {
//     const classification = new Map();
//     classification.set(1, 'baseball')
//     classification.set(2, 'soccer')
//     classification.set(3, 'football')
//     console.log(`This ${this.name} plays ${this.sport}`)
//   }
// }

// const allAthletes = [new Athlete('Jim', 'baseball', 'left field'),
//                     new Athlete('Eric', 'soccer', 'midfielder'),
//                     new Athlete('Sam', 'football', 'full-back')
// ]

// console.log(allAthletes)
// console.log(`${this.name} plays ${this.sport}`)

// var name = "NICK";
// console.log(name.toLowerCase())

// function lifeInWeeks(age) {
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 90;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
// }

// lifeInWeeks(12)

/*-----------BMI Challenge------------*/

// function bmiCalculator(weight, height) {
//   var bmi = weight / Math.pow(height, 2);
//   return Math.round(bmi);
// }

// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

// var fruitArr = ["apple", "mango", "strawberry", "peach"];

// console.log(fruitArr);

// fruitArr.push("pear");

// fruitArr.pop(4);

// for (i = 0; i < fruitArr.length; i++) {
//   console.log(fruitArr[i]);
// }

// console.log(fruitArr.indexOf("strawberry"));

// fruitArr.forEach((element) => console.log(element));

// // Leap year challenge

// function isLeap(year) {
//   if (year & (4 === 0)) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             return "Not a leap year."
//         } else {
//             return "Not a leap year."
//         }
//     }
//   } else {
//     return "Not leap year.";
//   }
// }

// --------------------Fibonacci Challenge-----------------------------

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  }

  else if (n === 2) {
    output = [0,1];
  }

  else {
    output = [0, 1, 1, 2];

    for (var i=2; i<n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);

    }


  }

  return output;


}

output = fibonacciGenerator(5);
console.log(output);

