'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// old school way befor the 1ajax call
// this is the old scool way of doing ajax in js
// FIRST API CALL

// let request = new XMLHttpRequest();

// request.open('GET', 'https://restcountries.com/v3.1/all');
// request.send();
// request.addEventListener('load', function () {
//   console.log(this.responseText);
// });

// single country name Api
// /////////////////////////////////////////////////////////////////////

// let req = new XMLHttpRequest();
// req.open('GET', 'https://restcountries.com/v3.1/name/pakistan');
// req.send();
// req.addEventListener('load', function () {
//   // .///////////////////////////////////////////
//   // console.log(this.responseText);
//   // convert this into real data
//   // let data = JSON.parse(this.responseText);
//   // destructure the object array
//   let [data] = JSON.parse(this.responseText);
//   console.log(data);
//   console.log(data.population);
//   //   ////////////////////////////////////////////
//   // make card
//   let card = `
//               <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[1]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.urd}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.PKR.name
//             }</p>
//           </div>
//         </article>

//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', card);
//   countriesContainer.style.opacity = 1;
// });
// ///////////////////////////////////////////////////
// All countries data
// let getCountryData = function (country) {
//   let req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();
//   req.addEventListener('load', function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.population);
//     let card = `
//               <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[1] || data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${
//               data.languages.urd || data.languages[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${data.currencies.name}</p>
//           </div>
//         </article>

//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', card);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('pakistan');
// getCountryData('usa');
// getCountryData('germany');
// /////////////////////////////////////////////////
// LET MAKE THE SECOND CALL AFTER THE 1 CALL IS COMPLETE AND FETCH DATA
// let make show card function
let showcard = function (data, neighbour) {
  console.log();
  let card = `
                      <article class="country">
                  <img class="country__img" src="${
                    data.flags.png || data.flags.svg
                  }" />
                  <div class="country__data">
                    <h3 class="country__name">${
                      data.altSpellings[1] || data.name
                    }</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)} people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages.urd || data.languages[0]
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies.PKR.name
                    }</p>
                  </div>
                </article>

                `;
  countriesContainer.insertAdjacentHTML('beforeend', card);
  // countriesContainer.style.opacity = 1;
};
// let getCountryAndNeighbour = function (country) {
//   let req = new XMLHttpRequest();
//   req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   req.send();
//   req.addEventListener('load', function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     showcard(data);
//     //     GET NAGHBOUR COUNTRY
//     let [neighbour, ...others] = data.borders;
//     if (!neighbour) return;

//     if (neighbour) {
//       // ajax call 2
//       let req2 = new XMLHttpRequest();
//       req2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       req2.send();
//       req2.addEventListener('load', function () {
//         let [data2] = JSON.parse(this.responseText);
//         console.log(data2);
//         showcard(data2);
//       });
//     }
//   });
// };
// getCountryAndNeighbour('pakistan');

// /////////////////////////////////////////////////////////////////////////////
// Fetch Api and the Promises in java script
// let requestData = fetch('https://restcountries.com/v3.1/name/pakistan');
// console.log(requestData);
// let countryData = country => {
//   //   asume the promises
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(responce => {
//       return responce.json();
//     })
//     .then(data => {
//       console.log(data);
//       let [data1] = data;
//       console.log(data1);
//       showcard(data1);
//       // //////////////////////////////////
//       // let chaining methods in promices
//       // 2 equentioal ajax call
//       // let neighbour = data1.borders;
//       // if (!neighbour) return;
//       // if (neighbour) {
//       //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//       //     .then(data => {
//       //       return data.json();
//       //     })
//       //     .then(data => {
//       //       showcard(data, 'neighbour');
//       //     });
//       // }
//     });
// };
// btn.addEventListener('click', function () {
//   countryData('pakistan');
// });
// ////////////////////////////////////////////////////////
// handlinh errors is promises
// check this if we are offline with our a data connections
// its fail to load the data and promise is failed rejected
// we can solve this 2 ways
let showerror = mesg => {
  countriesContainer.insertAdjacentText('beforeend', mesg);
  // countriesContainer.style.opacity = 1;
};
// let countryData = country => {
//   //   asume the promises
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       responce => {
//         return responce.json();
//       }
//       // err => {
//       //   return alert(err);
//       // }
//     )
//     .then(data => {
//       console.log('data 1', data[0]);
//       let data1 = data[0];
//       console.log(data1);
//       showcard(data1);
//       // //////////////////////////////////
//       // let chaining methods in promices
//       // 2 equentioal ajax call
//       // let neighbour = data1.borders;
//       // if (!neighbour) return;
//       // if (neighbour) {
//       //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//       //     .then(data => {
//       //       return data.json();
//       //     },
//       // err => {
//       //  return alert( err);
//       // })
//       //     .then(data => {
//       //       showcard(data, 'neighbour');
//       //     });
//       // } we catch all errors at the end
//     }) // ////////////////////////catch error methods
//     .catch(err => {
//       console.log('Error 🎇  🎇  🎇', err);
//       showerror(`oops something went wrong ${err.message} . try again `);
//     }) //Finaly methods in java script promises
//     // its called every rime when reject and fillfill the methos
//     .finally(finalresult => {
//       // we use this hide a loading spinners like
//       // we show the container body
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   countryData('pakistan');
// });
//// Eror 404 handling in java scrit promises
// we check that the our error ans responce message then we
// write alogical messages
let countryData = country => {
  //   asume the promises
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(responce => {
      if (!responce.ok) {
        throw new Error(`Country ${country} is not found ${responce.status} `);
      }
      return responce.json();
    })
    .then(data => {
      console.log('data 1', data[0]);
      let data1 = data[0];
      console.log(data1);
      showcard(data1);
      // call 2nd api call in the promises
      let neighbour = data1.borders;
      if (!neighbour) return;
      if (neighbour) {
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then(data => {
            if (!data.ok) throw new Error(`country not found ${data.status}`);
            return data.json();
          })
          .then(data => {
            showcard(data, 'neighbour');
          });
      }
    })

    .catch(err => {
      console.log('Error 🎇  🎇  🎇', err);
      showerror(`oops something went wrong ${err.message} . try again `);
    })
    .finally(finalresult => {
      countriesContainer.style.opacity = 1;
    });
};
// btn.addEventListener('click', function () {
//   countryData('pakistan');
// });
//// Eror 404 handling in java scrit promises
btn.addEventListener('click', function () {
  // countryData('hjkhu');
  countryData('china');
});
// ////////////////////////////////////
// EVENT LOOP WORKING IN JS
console.log();
// /*
///////////////////////////////////////
// Consuming Promises with Async/Await
// Error Handling With try...catch

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     // BUG in video:
//     // if (!resGeo.ok) throw new Error('Problem getting country');

//     // FIX:
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);
//   }
// };
//
///////////////////////////////////////
// Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💥`);
//     renderError(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

///////////////////////////////////////
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
