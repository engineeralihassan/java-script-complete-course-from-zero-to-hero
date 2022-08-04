// object literals has 3 types in js
// 1
// seprate objects
let weekDays = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
let openingHours = {
  // # 3 factors we write arrays like this

  [weekDays[4]]: {
    open: 12,
    close: 12,
  },
  [weekDays[5]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3]]: {
    open: 0,
    close: 24,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

let chickHouse = {
  name: "ChichenHouse",
  location1: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  //   openingHours: openingHours, rather we write this
  // we use
  openingHours, //that the new tric method 1
  weekDays,
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  // #2 for methods we skip the function keyword and braces
  order(strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
  orderDelivery({ strat1 = 1, main1 = 0, time, address }) {
    console.log(time);
    console.log(address);
    console.log(`order delivers ! ${this.starmanu[strat1]} and
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);
  },
  orderPizza(mainings, ...otherings) {
    console.log(`The main ingredient of pizza is ${mainings}
            and othe ingredients are ${otherings} `);
  },
  opendys24(day1, day2, day3, ...others) {
    console.log(`The Chicken house give service ${day1} 24 hours service
            and giv ethe 12 hours service in ${others}`);
  },
};
// Recall concepts
// console.log(chickHouse.openingHours);
// let {
//   sat: { open, close },
//   fri,
// } = chickHouse.openingHours;
// console.log(open, close);
// #1 enhancement in object ib es2020;
// recall concepts
// let [sunday, monday, tuesday, ...others] = chickHouse.weekDays;
// let leftdays = [...others, "saturday"];
// console.log(...leftdays);
// console.log(...others);
// let chi = chickHouse.opendys24("fathersday", ...weekDays);
// // object destructuring recall
// let { name, location1, starmanu } = chickHouse;
// console.log(location1);
// let chickCopy = { ...chickHouse, brand: "Kfc" };

// let { brand, location11, starmanu1 } = chickCopy;
// console.log(brand);
//   // opetional chaining in js
// object literals has 3 types in js
// 1
// seprate objects
let weekDays = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let openingHours = {
  // # 3 factors we write arrays like this

  [weekDays[4]]: {
    open: 12,
    close: 12,
  },
  [weekDays[5]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3]]: {
    open: 12,
    close: 24,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24,
  },
};

let chickHouse = {
  name: "ChichenHouse",
  location1: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  //   openingHours: openingHours, rather we write this
  // we use
  openingHours, //that the new tric method 1
  weekDays,
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  // #2 for methods we skip the function keyword and braces
  order(strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
  orderDelivery({ strat1 = 1, main1 = 0, time, address }) {
    console.log(time);
    console.log(address);
    console.log(`order delivers ! ${this.starmanu[strat1]} and
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);
  },
  orderPizza(mainings, ...otherings) {
    console.log(`The main ingredient of pizza is ${mainings}
            and othe ingredients are ${otherings} `);
  },
  opendys24(day1, day2, day3, ...others) {
    console.log(`The Chicken house give service ${day1} 24 hours service
            and giv ethe 12 hours service in ${others}`);
  },
};

// we wanter to get the and change the opening hours
// let we pretend we are in on live page
if (chickHouse.openingHours.mon)
  console.log("This Resturent is open:", chickHouse.openingHours.mon.open);

// console.log(chickHouse.openingHours.mon.open);
chickHouse.openingHours.mon || console.log("This is no exist ");
console.log(chickHouse.openingHours.thursday.open);
// with opetional chaining
console.log(chickHouse.openingHours.monday?.open); //this is not error this is undefined

// console.log(chickHouse.openingHours.monday.open); //this is error
//     multilevel opetional chaining
console.log(chickHouse.openingHours?.thursday);
console.log(chickHouse.openingHours?.thursday?.open);
console.log(chickHouse?.oopeningHours?.thursday);

// real world example in js
let days = [...weekDays];
console.log(weekDays);
console.log(days);

for (let day of days) {
  console.log(chickHouse?.oopeningHours?.thursday);

  let open = chickHouse?.openingHours[day]?.open ?? "closed";

  console.log(`on ${day}  we ${open ? "are open" : "are"}
            ${open}`);
}
console.log(chickHouse.openingHours.wednesday.open);
// opetional chaining is for the methods calling
console.log(chickHouse.order?.(0, 1) ?? "Method does not exist");

console.log(chickHouse.oorder?.(0, 1) ?? "Method does not exist");

//     optional chaining for arrays
let users = [
  {
    name: "ali",
    email: "ali@gmail.com",
    id: 12,
    age: 20,
  },
  {
    name: "husnain",
    email: "rabbani@gmail.com",
    id: 0,
    age: 23,
  },
  {
    name: "anas",
    email: "anas@gmail.com",
    id: 15,
    age: 20,
  },
];
console.log(users[1]?.name ?? " User no exist");
console.log(users[1]?.id ?? " property no exist");
// lllllllllll\
// object in loops
let weekDays = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let openingHours = {
  // # 3 factors we write arrays like this

  [weekDays[4]]: {
    open: 12,
    close: 12,
  },
  [weekDays[5]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3]]: {
    open: 12,
    close: 24,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24,
  },
};

let chickHouse = {
  name: "ChichenHouse",
  location1: "Welcome Road Renala khurd",
  catgories: ["pizza", "burgers", "handi karahi", "BBQ"],

  starmanu: ["chicken pizza", "zinger burger", "chicken Tiikka", "Egg burger"],
  //   openingHours: openingHours, rather we write this
  // we use
  openingHours, //that the new tric method 1
  weekDays,
  ordermanu: [
    "chicken karahi",
    "fajita kabab pizza",
    "beef burger",
    "mutton karahi",
  ],
  // #2 for methods we skip the function keyword and braces
  order(strat1, main1) {
    return [this.starmanu[strat1], this.ordermanu[main1]];
  },
  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
  orderDelivery({ strat1 = 1, main1 = 0, time, address }) {
    console.log(time);
    console.log(address);
    console.log(`order delivers ! ${this.starmanu[strat1]} and
         ${this.ordermanu[main1]}  will be deliverd to ${address}
         at ${time} pm`);
  },
  orderPizza(mainings, ...otherings) {
    console.log(`The main ingredient of pizza is ${mainings}
            and othe ingredients are ${otherings} `);
  },
  opendys24(day1, day2, day3, ...others) {
    console.log(`The Chicken house give service ${day1} 24 hours service
            and giv ethe 12 hours service in ${others}`);
  },
};
let keys = Object.keys(openingHours);
console.log(keys);

console.log(`we are open on ${keys.length} days is a week`);
console.log("So we are open");

for (let day of Object.keys(openingHours).entries()) {
  console.log(day[0], day[1]);
}
for (let day of keys) {
  console.log(day[0], day[1]);
}
// lets get the values of the objects
let values = Object.values(openingHours);
console.log(...values);
// looping over the entire object
let Entries = Object.entries(openingHours);

for (let day of Entries.entries()) {
  console.log(day[0], day[1]);
}
for (let [key, { open: op, close: cl }] of Entries) {
  console.log(`On ${key} we open at ${op}
            and we close at${cl}`);
}
// for simple objects
//       codding challenge number #2
const game = {
  team1: "GAlaxy FC 11/1L",
  team2: "Wapda X1 FC !!/1L",
  players: [
    [
      "Ali",
      "Husnain",
      "Anas",
      "Usman",
      "awad",
      "Rashid",
      "Waqqas",
      "Shahid",
      "Tariq",
    ],
    [
      "Ammanat",
      "Ali Raza",
      "Acho",
      "Bobby",
      "Athar",
      "umar hayat",
      "Bablo",
      "kashif",
      "Sheri",
    ],
  ],
  score: "2:0",
  scored: ["ZAryab", "Jawad", "Rashid", "Zahid"],
  date: "Nov 9th, 2021",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// 5.

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");
// challeng number#1
for (let [score, name] of game.scored.entries()) {
  console.log(`The Goal #${score} is scored by ${name}`);
}
// let {
//   odds: { team1: gfc, x: draw, team2: wapdafc },
// } = game;
// console.log(gfc, draw, wapdafc);
// console.table(`The average of `, gfc);
// console.table(`The average of `, wapdafc);
// console.table(`The average of `, draw);
// for odds

let {
  team1: Galaxy,
  team2: Wapda,
  odds: { team1: GalaxyOdd, team2: WapdaOdd, x: DrawOdd },
} = game;
console.log(`The Odd of Victory ${Galaxy} is: ${GalaxyOdd}
      The Odd of Victory ${Wapda} is: ${WapdaOdd}
      The Odd at which ${Galaxy} vs ${Wapda} is Draw:${DrawOdd}`);
// #4
let v = [1, 2, 3, 4];

// game.scorers = {};
// game.scorers.keys = game.scored;
// game.scorers.values = v;

// console.log(game.scorers);
// // keys
// let k = Object.keys(game.scorers);
// let p = Object.values(game.scorers);
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// let va = [...p];
// let ka = [...k];
// for (let i = 0; i < k.length; i++) {
//   console.log(`The Mr ${ka[i]} is scrored ${va[i]} Goals
//       `);
// }
// console.log(...k);
// console.log(...p);

// let Entries = Object.entries(game.scorers);

// console.log(Entries);
// for (let day of Entries.entries()) {
//   console.log(day[0], day[1]);
// }
// for (let [keys, values] of Entries) {
//   console.log(`On ${keys} we open at
//       and we close at${values}`);
// }

// for ([scorerName, scores] of kp.entries()) {
//   console.log(`Mr ${scorerName} is scored ${scores} id this Lallega `);
// }
// maps in java script
let resturent = new Map();
resturent.set("name", "Chicken-house");
resturent.set(1, "WEllcome Road");
resturent.set(2, "Kalma chowk");
resturent
  .set("categories", ["Pizza", "Burger", "Meal", "Juices"])
  .set("open", 11)
  .set("close", 24)
  .set(true, "We are open")
  .set(false, "we are closed");

console.log(resturent);
// get data fronm the maps
console.log(resturent.get("name"));
console.log(resturent.get("categories"));
console.log(resturent.get("open"));
console.log(resturent.get("close"));
console.log(resturent.get(true));
console.log(resturent.get(1));
// check
let time = 10;
console.log(
  resturent.get(time > resturent.get("open") && time < resturent.get("close"))
);
// methodsa available in Maps
console.log(resturent.has("categories"));
console.log(resturent.delete(2));
console.log(resturent);
console.log(resturent.size);
// console.log(resturent.clear());
// assign arrays to keys in maps
let arr = [1, 2, 3];
resturent.set(arr, "Testing set arrays ");
console.log(resturent.get(arr));
console.log(resturent.get([11, 2, 3]));
let weekDays = [
  "sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "thursday",
  "friday",
];
let openingHours = {
  // # 3 factors we write arrays like this

  [weekDays[4]]: {
    open: 12,
    close: 12,
  },
  [weekDays[2]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3]]: {
    open: 12,
    close: 24,
  },
  [weekDays[1]]: {
    open: 0,
    close: 24,
  },
};

const questions = new Map([
  ["question", "what is the best programing language"],
  [1, "c++"],
  [2, "Java script"],
  [3, "Python"],
  [4, "Kotlin"],
  [true, "Correct 🎉"],
  [false, "try again"],
]);
console.log(questions);
// converting objects into maps
let hoursmap = new Map(Object.entries(openingHours));

console.log(hoursmap);

for (let [key, value] of questions) {
  if (typeof key === "number") {
    console.log(`Anser ${key}: ${value}`);
  }
}
