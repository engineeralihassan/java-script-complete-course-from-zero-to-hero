"use strict";
let chickHouse = {
  name: "ChichenHouse",
  location: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  order: function (strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
};
// isolate the yourself
// destructuring is the way to break down large
// data
//  structure into a small data structure like variable
const arr = [2, 3, 4];
// insimple ways
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c);
// in destructuring
let [s, d, f] = arr;
console.log(s, d, f);
// with const variable
const arr1 = [12, 45, 67, 89];
let [l, k, j, h] = arr1;
console.log(l, k, j, h);
l = 2345;
console.log(l, k, j, h);
console.log(arr1);

// let take datafrom restuarent
let [cat1, cat2, cat3] = chickHouse.catgories;
console.log(cat1, cat2, cat3);
//    skip an element from main arrays
let [cate1, , cate3] = chickHouse.catgories;
console.log(cate1, cate3);
let [, cate11, cate31] = chickHouse.catgories;
console.log(cate11, cate31);
// // we do this as manual
// let temp=main;
// main=secondry;
// secondry=temp;

// in destructuring
console.log(
  ([chickHouse.starmanu, chickHouse.ordermanu] = [
    chickHouse.ordermanu,
    chickHouse.starmanu,
  ])
);
let a1 = [12, 45, 67, 89];
let a2 = [23, 76, 89, 90];
console.log(a1, a2);

[a2, a1] = [a1, a2];
console.log(a1, a2);

let [c1, c2] = [chickHouse.starmanu, chickHouse.ordermanu];
let [or, st] = [c2, c1];
console.log(c1, c2);
console.log(or, st);
// destructuring in fuction data
let t = chickHouse.order(3, 0);
console.log("t is :=", t);
// lets assignment the arrays d estructring
let [ored1, orer2] = t;
console.log(ored1);

//  nested arrays destructuring
// Nested array destructuring **********************
let nested = [12, 34, 56, ["Ali", "Anas", "awaise", 23]];
let [i, , , u] = nested;
console.log(i, u);
// destructuring into destructuring

let [w, , , [q, o, m, n]] = nested;
console.log(w);
console.log(q), console.log(o);
console.log(m, n);

// use the defualt values when we not know the lenght
let [z = 1, x, cc = 3, dd = 90, ff = 54, gg = 56, hh = 78] = [12, 45];
console.log(z, x, cc, dd, ff, gg, hh);
//

// objects destructuring
let chickHouse = {
  name: "ChichenHouse",
  location: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
  orderDelivery: function ({ strat1 = 1, main1 = 0, time, address }) {
    console.log(time);
    console.log(address);
    console.log(`order delivers ! ${this.starmanu[strat1]} and 
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);

    console.log(obj);
  },
};
// object destructuring in js
let { name, catgories, ordermanu, starmanu, openingHours } = chickHouse;
console.log("name", name);
console.log("categories", catgories);
console.log("order", ordermanu);
console.log("stert", starmanu);
console.log("opening", openingHours);
// destrutured object fom
//diiferent variable name to properties
let {
  name: restuarent,
  openingHours: hours,
  starmanu: start,
  ordermanu: ord,
} = chickHouse;
console.log(name);
console.log(hours);
console.log(start);
console.log(ord);
// defualt value
let { manu = [123, 34, 56, 78], starmanu: starter = [12, 45] } = chickHouse;
console.log("************************");
console.log(manu);
console.log(starter);

// mutating variable while destructuring objects
let c = 12;
let d = 14;
let obj = { c: 23, d: 56, d: 45 };
({ c, d } = obj);
console.log(c, d);
// object destructuring nested objects
let { fri } = openingHours;
console.log(fri);
// nesting aproach
let {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);
// calling a function a pass aobject

chickHouse.orderDelivery({
  time: "23:34",
  address: "11/1L Nambardar house",
  strat1: 1,
  main1: 3,
});
chickHouse.orderDelivery({
  time: "23:34",
  address: "11/1L Ali Hassan House",
});


// spread operarors

      let arr = [1, 2, 3, 4, 5, 6, 7];
      let arr2 = [12, 34, 56, arr[1], arr[2]];
      let arr3 = [12, 34, 56, arr, arr2];

      console.log(arr);
      console.log(arr2);
      console.log(arr3);
      // sPreaD OPERATORS
      let arr4 = [12, 34, ...arr2, ...arr];
      console.log(arr4);
      // example real
      let chickHouse = {
        name: "ChichenHouse",
        location: "Welcome Road Renala khurd",
        catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

        starmanu: [
          "chicken pizza",
          "zinger burger",
          "chicken Tiikka",
          "Egg burger",
        ],
        ordermanu: [
          "chicken karahi",
          "fajita kabab pizza",
          "beef burger",
          "mutton karahi",
        ],
        openingHours: {
          thu: {
            open: 12,
            close: 12,
          },
          fri: {
            open: 11,
            close: 23,
          },
          sat: {
            open: 0,
            close: 24,
          },
        },
        order: function (strat1, main1) {
          return [this.starmanu[strat1], this.ordermanu[main1]];
        },
        //   orderDelivery: function (obj) {
        //     console.log(obj);
        //   },
        orderDelivery: function ({ strat1 = 1, main1 = 0, time, address }) {
          console.log(time);
          console.log(address);
          console.log(`order delivers ! ${this.starmanu[strat1]} and
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);
        },
        orderPasta: function (ing1, ing2, ing3) {
          console.log(`Here is oyur pasta Made with
           ${ing1},${ing2} and ${ing3}`);
        },
      };
      let nemanue = [...chickHouse.ordermanu, "Local food", "charsi tikka"];
      console.log(nemanue);
      // to important usecase of the spread operators
      // it is used the shallow coppy and merg 2 arrays
      let ordermanuCopy = [...chickHouse.ordermanu];

      // merg and join 2 arrays
      let merge = [...chickHouse.ordermanu, ...chickHouse.starmanu];
      console.log(merge);

      // spread opearators works with all iterables
      // iterable in js=
      // arrays,maps,sets,strings but not objects

      // spread to use on strings

      let m = "AliHassan";
      let m1 = [...m];
      console.log(m1);
      // this is not use tit in the template literals
      // console.log(`this is ${...arr}`) not use in this place

      // **************************
      // spread operators in arguments in function
      let ings = ["Vegetables", "Chicken", "bread"];

      chickHouse.orderPasta(...ings);
      // spread operatos in objects
      let pakRohani = {
        ...chickHouse,
        founder: "M Mustaq",
        founding: 2002,
      };
      console.log(pakRohani);
      let newobj = { ...chickHouse };
      newobj.name = "Food Gallery";
      console.log(newobj.name);
      console.log(chickHouse.name);