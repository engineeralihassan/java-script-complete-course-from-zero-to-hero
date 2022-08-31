// codding challenge no 1
alert('file');

function wherAmI(lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then(responce => {
      // this is an eror so we handle it manually
      if (!responce.ok) {
        throw new Error(`Something went wrong 
        plz try again later ${responce.status}`);
      }
      return responce.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, the city of ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(responce => {
      if (!responce.ok) {
        throw new Error('country not found', responce.status);
      }
      return responce.json();
    })
    .then(data => renderCountry(data))
    .catch(err => {
      return console.log('🎆🎈🎇🧨✨', err.message);
    });
}
wherAmI(52.508, 13.381);
wherAmI(19.037, 72.873);
wherAmI(-33.933, 18.474);
