"use strict";
// alert("file atatched");
// let b = 90;
// b = 34;
// var c = 23;
// var c = 245;
// console.log(c, b);
// console.log(a);
// let new1 = 23;
// console.log(new1);
// calling a functiion

// let a = "Ali";
// // first(); this is error

// function first() {
//   let b = "Hello";
//   second();
//   function second() {
//     let c = "hi";
//     third();
//   }
// }
// function third() {
//   let d = "hey";
//   console.log("The sum is", d + c + b + a);
// }
// this is belong to an error
let a = "Ali";
first(); //this is error

function first() {
  let b = "Hello";
  second();
  function second() {
    let c = "hi";
    console.log("The lexical scoping ", c, b);
  }
}
function third() {
  let d = "hey";
  console.log("The function scope is :", d);
}
// another example  function and variable scoping
let stu = "Ali";
info();

function info() {
  let age = 20;
  let prog = "BSSE";
  let location = "renala khurd";
  info1();
  console.log(`The ${stu} is
${age} years old ${info1()}
and his programe is ${prog}
he is lived in ${location}
 and his CGPA : cgpa`); //error becuase we could no use the child variable

  function location1() {
    let cgpa = 3.45;

    let location = "Renala khurd";
    console.log("The name is: ", a); //global variable
    console.log("The class is:", prog); //parent scoping
    if (age >= 19) {
      let sib = 10; //block scop
      sib -= age; //lexical scoping
    }
    //   console.log(sib) //error block scope variable

    return location;
  }
}
function info1() {
  let prof = "programmer";
  return prof;
}

// scopping in practice
// example of scopping large level
let name = "Ali";
let lastName = "Hassan";
let prof = "Student";
let married;
let agemarried = function () {
  let age = 2022 - 2002;
  return age;

  let married = () => {
    if (age >= 18) {
      //age use through parrent scopping
      married = true; //lexecal scopping
      console.log(`Mr ${name} is married`);
    } else {
      console.log("plz waite", age, "years");
    }
  };
};
let player = function () {
  let player = true;
  return player;
};

function bioData() {
  let age = agemarried();
  let player = player();

  console.log(`Mr ${name} is an ${age}.
      he is a ${prof} and he is  ${married ? "Married" : "not married"} person
      he is ${player ? "aplayer" : "not a player"}  `); //this age is error
}
bioData();

//jhoisting in java script
console.log(job); //undefined
console.log(DOB); // error

console.log(me); //error

let me1 = "ali hassan";
var job = "Programer";
const DOB1 = 2002;
console.log(job); // not undefined
console.log(DOB1); //not  error

console.log(me1); // not error

// rules of hoisting
// adddec(12, 34);
// expAdd(12, 34);
// arrowAdd(12, 34);

function adddec(a, b) {
  console.log("function declaration");

  return a + b;
}
let expAdd1 = function (a, b) {
  console.log("function expression");
  return a + b;
};
var arrowAdd = (a, b) => {
  console.log("Arrow functions");

  return a + b;
};
adddec(12, 34);
expAdd1(12, 34);
arrowAdd(12, 34);

// rel example

if (!product) deleteProduct();

var product = 10;
function deleteProduct() {
  console.log("all products deleted");
}
// this keyword

let calcage = function (birth) {
  //   console.log(2022 - birth);
  console.log("The this in function expresiion : ", this);
};

let s = calcage(2002);
console.log(s);

// THIS keyword IS FOR ARROW FUNCTIONS
// arrow function is not  this own this use the this in lexical

let calcage1 = (birth) => {
  console.log(2022 - birth);
  console.log("The this in arrow function  : ", this);
};

calcage1(2002);
console.log(this); // simple this=window object
// inobjects this keyword

let ali1 = {
  name: "Ali Hassn",
  age: 20,
  year: 2002,

  calcAge: function () {
    return 2022 - this.year;
    console.log(this);
  },
};
console.log(ali.calcAge());
// in the function expression
var lastName1 = "Hamid";
let ali = {
  firstName: "Ali",
  lastName: "Hassan",
  age: 20,
  class: "BSSE",
  RollNo: 5063,
  sum: 0,
  marks: [89, 67, 89, 56, 78],
  cgpa: function () {
    for (let i = 0; i < this.marks.length; i++) {
      this.sum += this.marks[i];
    }
    return this.sum / this.marks.length - 1;
  },
  agrigate: () => {
    console.log("This is  name", this.lastName1);
  },
};
console.log(ali.cgpa());
ali.agrigate();

// with var this keyword in  functions

// with inside the function another function
let husnain = {
  name: "Husnain",
  nick: "Rabbani",
  Uni: "UCMT",
  fees: 1050000,
  scolarshp: function () {
    this.scolarshp = (this.fees / 25) * 100;
    console.log("The scholarship is : ", this.scolarshp);
    let self = this;

    let isToper = function () {
      console.log(self);
      if (self.fees >= 100000) {
        console.log("Husnain is The topper");
      }
    };
    isToper();
  },
};
husnain.scolarshp();
// inner function undefined solution in Arrow functions
let anas = {
  name: "Anas",
  nick: "Ashiq",
  Uni: "Mishrishah",
  salary: 30000,
  saving: function () {
    this.scolarshp = (this.salary / 25) * 100;
    console.log("The saving is : ", this.scolarshp);
    let that = this;

    let isToper = () => {
      console.log("Thisnis arraow", this);
      if (this.salary > 28000) {
        console.log("Anas is on Good job");
      }
    };
    isToper();
  },
};
anas.saving();
// primitives avlue vs objects
let age = 11;
let newage = age;
age = 23;
console.log(newage, age);
// objects
let me = {
  name: "Ali",
  age: 20,
  class: "BSSE",
};
let hus = me;
hus.age = 23;
console.log(me.age, hus.age);
// exaple in pracice
let bfmfn = "Ali";
let afmfn = bfmfn;

bfmfn = "Ali Hassan";

console.log(bfmfn, afmfn);
// objects
let aliunm = {
  name: "Ali Hassan",
  age: 20,
  marstatus: "unMarried",
};
let alim = {
  name: aliunm.name,
  age: aliunm.age,
};
console.log("Before", aliunm, "After", alim);
alim.marstatus = "married";
console.log("Before", aliunm, "After", alim);
let alisecm = alim;
alisecm.marstatus = "DEvorced";
console.log("Before", alisecm, "After", alim);

// big big example
// copy the objects in js
console.log("************************************************");

let jessica = {
  name: "Jessica",
  age: "55",
  job: "teacher",
};
let jessicaedu = {
  matric: ["school of toughts", 500, 460, ["jonas", "Ali", "Matilda"]],
  inter: ["superior collage", 500, 389, ["schemaddman", "Ali", "sundar"]],
  uni: [
    "univerty of california",
    500,
    460,
    ["jonas scedmann", "Ali hassan", "Matilda"],
  ],
  bioData: function () {
    console.log("Matric Bio Data");
    console.log(`School Name    total    obtain    friends`);
    for (let i = 0; i < this.matric.length; i++) {
      console.log(`${this.matric[i]}:`);

      if (
        typeof this.matric[i] !== "string" &&
        typeof this.matric[i] !== "number"
      ) {
        console.log("Jessica friend");
        for (
          let j = 0;
          j < jessicaedu.matric[jessicaedu.matric.length - 1].length;
          j++
        ) {
          console.log(jessicaedu.matric[i][j]);
        }
      }
    }
  },
};
jessicaedu.bioData();

let jessicacopy = Object.assign(jessica, jessicaedu);
// copying exaple
