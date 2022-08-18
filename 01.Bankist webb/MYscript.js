'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let btnscroll = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');
/////////////////////////////////////////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// let convert the for loop into foreach
btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// escape key function
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////////////////////////////////////////////////////////////
// let improves the functionality of smooth scrool
// old way
function scrollSmoth(e) {
  // // console.log(s1, s2);
  // let s1scroords = section1.getBoundingClientRect();
  // console.log(s1scroords);
  // console.log(e.target.getBoundingClientRect());
  // //find current scrool point
  // console.log('scroll point', window.pageXOffset, pageYOffset);
  // //  find the viewport hieth and width
  // console.log(
  //   'hieght/width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // // scrooling functions
  // window.scrollTo(
  //   s1scroords.left + window.pageXOffset,
  //   s1scroords.top + window.pageYOffset
  // // );
  // window.scrollTo({
  //   left: s1scroords.left + window.pageXOffset,
  //   top: s1scroords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //////////////////////////////////////////////////
  //this is the more moderen way to do this
  section1.scrollIntoView({ behavior: 'smooth' });
}
btnscroll.addEventListener('click', scrollSmoth);
// ////////////////////////////////////////////////////////
// page navigatons
// This is not agood way its deecrease speed

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('link');
//     let id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// we use the event propagation
//1.Add eventlistner to common parent element
//2.determnine what element orignated the event
// event delegations in js project

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    let id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// /////////////////////////////////////////////////////////////////////
// TBBED COMPONENTS IN WEB
let tabs = document.querySelectorAll('.operations__tab');
let tabcontainer = document.querySelector('.operations__tab-container');
let tbascontent = document.querySelectorAll('.operations__content');
// tabs.forEach(btn =>
//   btn.addEventListener('click', () => console.log('tabbind done'))
// );
// foreach is not go for this we do the dom bubbling propagatiom
tabcontainer.addEventListener('click', e => {
  let clicked = e.target.closest('.operations__tab');

  //guard class
  if (!clicked) return;
  if (clicked) {
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');
    //activate the content
    tbascontent.forEach(tab =>
      tab.classList.remove('operations__content--active')
    );

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});
// /////////////////////////////////////////////////////////////////
// passing arguments
// fadeout all the exceptions links tabs and logo
let nav = document.querySelector('.nav');
// creating new functions for these all
let makevisible = function (e) {
  if (e.target.classList.contains('nav__link')) {
    let link = e.target;
    let otherlinks = link.closest('.nav').querySelectorAll('.nav__link');
    let logo = link.closest('.nav').querySelector('img');
    otherlinks.forEach(element => {
      if (element !== link) {
        //   element.style.opacity = opac;
        element.style.opacity = this;
      }
    });
    //   logo.style.opacity = opac;
    logo.style.opacity = this;
  }
};
// nav.addEventListener("mouseover", (e) => {
//   makevisible(e, 0.5);
// });
// nav.addEventListener("mouseout", (e) => {
//   makevisible(e, 1);
nav.addEventListener('mouseover', makevisible.bind(0.5));
nav.addEventListener('mouseout', makevisible.bind(1));
//  ///////////////////////////////////////////////////////////////
//STICKY NAVBAR
// let initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// ////////////////////////////////////////////////////////////////////
// lets do sticky navbar inthe best way Api
// creating new intersection of server
// let observerCallBack = function (entries, observer) {
//   entries.forEach(ent => );
// };
// // options object
// let observeroptions = {
//   root: null,
//   threshold: 0.1,
// };
// let observer = new IntersectionObserver(observerCallBack, observeroptions);

// observer.observe(section1);
const header = document.querySelector('.header');
let navhieght = nav.getBoundingClientRect().height;

let stickyNav = entries => {
  let [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else {
    nav.classList.remove('sticky');
  }
};
let headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navhieght}px`,
});
headerObserver.observe(header);
// ///////////////////////////////////////////////////////////////////////
// Reveling the EleMents in scroll near
//Allsection
let allSections = document.querySelectorAll('.section');

let revealSection = function (entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
let revealoption = {
  root: null,
  threshold: 0.2,
};
let sectionObserver = new IntersectionObserver(revealSection, revealoption);
allSections.forEach(el => {
  sectionObserver.observe(el);
  // el.classList.add('section--hidden')//we also do this
});
// ////////////////////////////////////////////////////////////////////////
// LAZY IMAGE LOADING IN JS
let imges = document.querySelectorAll('img[data-src]');
// console.log(imges);
let loadlazy = function (entries, observer) {
  let [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace the images
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

let laziImageLoader = new IntersectionObserver(loadlazy, {
  root: null,
  threshold: 0.1,
  rootMargin: '200px',
});
imges.forEach((el, ind) => {
  laziImageLoader.observe(el);
});
// laziImageLoader.observe(imges);
// ///////////////////////////////////////////////////////
// SLIDER SCTION Script
/* ONLY IMAG SLIDER CODE
let slides = document.querySelectorAll('.slide');
let leftbtn = document.querySelector('.slider__btn--left');
let rightbtn = document.querySelector('.slider__btn--right');
// let slider = document.querySelector('.slider');
let currslide = 0;
let maxSlides = slides.length;

// ONLY IMGES SLIDER CODE
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

let gotoslide = function (slide) {
  slides.forEach(
    (s, ind) => (s.style.transform = `translateX(${100 * (ind - slide)}%)`)
  );
};
gotoslide(0);

let nextslide = function () {
  if (currslide === maxSlides - 1) {
    currslide = 0;
  } else {
    currslide++;
  }
  gotoslide(currslide);
};
let prevSlide = function () {
  if (currslide === 0) {
    currslide = maxSlides - 1;
  } else {
    currslide--;
  }

  gotoslide(currslide);
};

rightbtn.addEventListener('click', nextslide);
leftbtn.addEventListener('click', prevSlide);
*/
let slides = document.querySelectorAll('.slide');
let leftbtn = document.querySelector('.slider__btn--left');
let rightbtn = document.querySelector('.slider__btn--right');
let dotContainer = document.querySelector('.dots');
let currslide = 0;
let maxSlides = slides.length;

let createDots = function () {
  slides.forEach((_, ind) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${ind}"></button>`
    );
  });
};
createDots();
// active slider dot
let activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activeDot(0);

let gotoslide = function (slide) {
  slides.forEach(
    (s, ind) => (s.style.transform = `translateX(${100 * (ind - slide)}%)`)
  );
};

gotoslide(0);

let nextslide = function () {
  if (currslide === maxSlides - 1) {
    currslide = 0;
  } else {
    currslide++;
  }
  gotoslide(currslide);
  activeDot(currslide);
};
let prevSlide = function () {
  if (currslide === 0) {
    currslide = maxSlides - 1;
  } else {
    currslide--;
  }

  gotoslide(currslide);
  activeDot(currslide);
};

rightbtn.addEventListener('click', nextslide);
leftbtn.addEventListener('click', prevSlide);
// //////////////////////////////////////////////////
// SLIDER HANDLE  ON KEYBOARD LEFTRIGHT BTN
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextslide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    console.log('Dot');
    let slide = e.target.dataset.slide;
    gotoslide(slide);
    activeDot(slide);
  }
});
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

// //EVENTS PROPAGATIONS LECTURE

// let c = document.querySelector('.nav__link');
// // console.log(c);
// // c.forEach((el, ind, arr) => {
// //   el.addEventListener('click', function (e) {
// //     console.log('Hello', ind);
// //   });
// // });

// // for (let i = 0; i < c.length; i++) {

// //   c.addEventListener('click', function (e) {
// //     alert('click on the link', i);
// //     console.log('Hello');
// //   });
// // }

// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   console.log('this is link');
// //   alert('link');
// // });

// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   e.preventDefault();
// //   this.style.backgroundColor = 'red';
// //   e.stopPropagation();
// // });
// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //   e.preventDefault();
// //   this.style.backgroundColor = 'blue';
// //   e.stopPropagation();
// // });
// // document.querySelector('.nav').addEventListener('click', function (e) {
// //   e.preventDefault();
// //   this.style.backgroundColor = 'green';
// // });
