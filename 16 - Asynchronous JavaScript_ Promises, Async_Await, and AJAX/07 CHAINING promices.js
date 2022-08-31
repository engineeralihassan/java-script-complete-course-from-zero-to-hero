let showcard = function (data) {
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
  countriesContainer.style.opacity = 1;
};
// let requestData = fetch('https://restcountries.com/v3.1/name/pakistan');
// console.log(requestData);
// let countryData = function (country) {
//   //   asume the promises
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (responce) {
//       return responce.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let [data1] = data;
//       console.log(data1);
//       showcard(data1);
//     });
// };
// countryData('pakistan');
// /////////////////////////////////////
let countryData = country => {
  //   asume the promises
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(responce => {
      return responce.json();
    })
    .then(data => {
      console.log(data);
      let [data1] = data;
      console.log(data1);
      showcard(data1);
      // //////////////////////////////////
      // let chaining methods in promices
      // 2 equentioal ajax call
      let neigbour = data1.borders;
      if (!neigbour) return;
      if (neigbour) {
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then(data => {
            return responce.json();
          })
          .then(data => {
            showcard(data, 'neighbour');
          });
      }
    });
};
countryData('pakistan');
