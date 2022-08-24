'use strict';

// prettier-ignore
// ///////////////////////////////////////////////////
// variables declarations

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let form = document.querySelector('.form');
let containerWorkouts = document.querySelector('.workouts');
let inputType = document.querySelector('.form__input--type');
let inputDistance = document.querySelector('.form__input--distance');
let inputDuration = document.querySelector('.form__input--duration');
let inputCadence = document.querySelector('.form__input--cadence');
let inputElevation = document.querySelector('.form__input--elevation');
// let creae global variable

let map;
let MapEvent;
// geolocation Api
// navigator.geolocation.getCurrentPosition()
// this function is take the 2 call backs functions1 is for sucess

//other is for error

// if (navigator.geolocation) {
//   //   ////////////////////////////////////////////////////////////
//   // get real present locations in js
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       // position object has many properties like latitude and longitude speed
//       // we get the latiturde and longiture
//       // let latitude = position.coords.latitude;
//       let { latitude, longitude } = position.coords;
//       console.log(latitude, longitude);
//       // console.log(position);
//       // we curently create a google map link
//       // make a link
//       //  console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//       // lets show the map on our web page
//       // copy the leaflet page and put this lik befor our script in the index page of out side
//       // leaflet function we use

//       // let map = L.map('map').setView([51.505, -0.09], 13); //l.map function accept the agruments id name
//       //  of the element wher we want to show the map
//       // setview methids take argumenrs we give our oun longiture latitire
//       let cords = [latitude, longitude];
//       //   let map = L.map('map').setView(cords, 15,34,5,6,7,8); we change the number 13 by any number
//       //   ////////////////////////////////////////////////////////////
//       // show Map in The Map Div
//       map = L.map('map').setView(cords, 13);
//       // this map is becuase of little tiles this is usedthe openstreemap
//       // leaflet also used other maps like google maps
//       // we also change the shap of the maps in the web
//       // lets change the shap od the map

//       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // L.marker([51.5, -0.09])
//       // this is the simple code we getthis markup according to our own position we click
//       // L.marker(cords)
//       //   .addTo(map)
//       //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//       //   .openPopup();
//       //   on method is the another method of leaflet like evenistners
//       //
//       // HANDLING CLICKS ON MAP

//       map.on('click', function (MapE) {
//         MapEvent = MapE;
//         //   let { lat, lng } = MapEvent.latlng;
//         //   now we set this thing the onclcick event
//         // now we customize this popup style
//         //   we comment out his
//         //   ////////////////////////////////////////////////////////////
//         // change the apperance of the popup
//         //   L.marker([lat, lng])
//         //     .addTo(map)
//         //     .bindPopup(
//         //       L.popup({
//         //         maxWidth: 250,
//         //         minWidth: 100,
//         //         autoClose: false,
//         //         closeOnClick: false,
//         //         className: 'running-popup',
//         //       })
//         //     )
//         //     .setPopupContent('WorkOut')
//         //     .openPopup();
//         //   ////////////////////////////////////////////////////////////
//         // show form when click
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('this is not fetch the current location');
//     }
//   );
// }
// console.log(na);
//   ////////////////////////////////////////////////////////////
// Eventlistener Submit for form
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //   //////////////////////////////
//   // clear inputs fields
//   inputDistance.value =
//     inputCadence.value =
//     inputDuration.value =
//     inputElevation.value =
//       '';

//   // display marker
//   //   there are the 2 problemes error becuase have 2 variables
//   //   in this are not declzire in this scope

//   let { lat, lng } = MapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('WorkOut')
//     .openPopup();
// });

// /////////////////////////////////////////////////////////
// change input fields
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

// //////////////////////////////////////////////////////////
//WORK ACCORDING TO ARCHITECTURE IN OOP
class App {
  map;
  MapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkOut.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation) {
      //   ////////////////////////////////////////////////////////////
      // get real present locations in js
      navigator.geolocation.getCurrentPosition(
        this._LoadMap.bind(this),
        function () {
          alert('this is not fetch the current location');
        }
      );
    }
  }
  _LoadMap(position) {
    console.log(position);

    let { latitude, longitude } = position.coords;

    let cords = [latitude, longitude];
    //   ////////////////////////////////////////////////////////////
    // show Map in The Map Div
    console.log(this);
    // this is undefined becuase this in regular function call is undefined we bind this methids wher we call

    this.map = L.map('map').setView(cords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // HANDLING CLICKS ON MAP

    this.map.on('click', function (MapE) {
      this.MapEvent = MapE;

      //   ////////////////////////////////////////////////////////////
      // show form when click
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }
  _showMap() {}
  _toggleElevationField() {}
  _newWorkOut(e) {
    e.preventDefault();
    //   //////////////////////////////
    // clear inputs fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';

    // display marker
    //   there are the 2 problemes error becuase have 2 variables
    //   in this are not declzire in this scope

    let { lat, lng } = MapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('WorkOut')
      .openPopup();
  }
}
let app = new App();
