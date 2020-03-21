/* HEADER
================== */

const NAV = document.getElementById('nav')
const MENU = document.querySelectorAll('.nav__link');

window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if(window.pageYOffset > 30){
      header.classList.add('header_fixed');
  } else{
      header.classList.remove('header_fixed');
  }
}

nav.addEventListener('click', e => {
	if (e.target != NAV) {
		NAV.querySelectorAll('a').forEach(a => a.classList.remove('active'))
		e.target.classList.add('active')
	}
})

MENU.forEach(function (item) {
  item.addEventListener('click', function (event) {
      event.preventDefault();

      let anchor = item.getAttribute('href').substr(1);

      document.getElementById(anchor).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          
      });
  });
});



/* SLIDER 
==================*/


/* OFF/ON Display
==================*/



const PHONE_VERTICAL = document.querySelectorAll(".phone__vertical");
PHONE_VERTICAL.forEach(element =>
  element.addEventListener("click", e => {
    const PICTURE = e.currentTarget.querySelector(".display--vertical");
    if (PICTURE.style.display === "none") {
      PICTURE.style.display = "block";
    } else {
      PICTURE.style.display = "none";
    }
  })
);

const PHONE_HORIZONTAL = document.querySelectorAll(".phone__horizontal");
PHONE_HORIZONTAL.forEach(element =>
  element.addEventListener("click", e => {
    const PICTURE = e.currentTarget.querySelector(".display--horizontal");
    if (PICTURE.style.display === "none") {
      PICTURE.style.display = "block";
    } else {
      PICTURE.style.display = "none";
    }
  })
);


/* Slideshow
==================*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
}


/* PORTFOLIO 
==================*/


/* Filter 
==================*/
filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("portfolio__work");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

/* Activate 
==================*/
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("portfolio__button ");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("portfolio__button--active");
    current[0].className = current[0].className.replace(" portfolio__button--active", "");
    this.className += " portfolio__button--active";
  });
}


/* Add Border 
==================*/
const portfolio = document.getElementById('works')
portfolio.addEventListener('click', e => {
	portfolio.querySelectorAll('img').forEach(work => {
		work.classList.remove('work__active')
	})
	if (e.target != portfolio) e.target.classList.add('work__active')
})



/* CONTACT 
==================*/

const btn = document.getElementById('btn')
const closeBtn = document.getElementById('close-btn')
const alertTopic = document.getElementById('alert-topic')
const alertText = document.getElementById('alert-text')

document.querySelector('.contact__form').addEventListener('submit', e => {
	const subject = document.getElementById('subject').value
	const description = document.getElementById('description').value
	if (subject) alertTopic.innerText = 'Тема: ' + subject
	if (description) alertText.innerText = 'Описание: ' + description
	document.getElementById('alert').classList.remove('alert__hidden')
	e.preventDefault()
})

closeBtn.addEventListener('click', e => {
	document.getElementById('alert').classList.add('alert__hidden')
	e.preventDefault()
})

