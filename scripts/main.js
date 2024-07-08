document.addEventListener('DOMContentLoaded', (e) => {
  animateHeroText()  
  animateAbout()
  manageHeader()
  // animateServices()
  // animateTestimonials()
  // animateContactUs()
})


function manageHeader() {
  const header = document.querySelector('header') ;
  const menu = document.querySelector('header ul') ;
  const buttons = document.querySelectorAll('header span') ;
  const hero = document.getElementById('hero')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      menu.classList.toggle('open')
    })
  })
}

function animateHeroText() {
  const heroTitle = document.querySelector("#hero h1 span")
  const heroText = document.querySelector("#hero p span")
  const buttons = document.querySelectorAll('#hero a') ;

  if(!heroTitle.classList.contains('show-hero-title')) {
    heroTitle.classList.add('show-hero-title') ;
  }

  if(!heroText.classList.contains('show-hero-text')) {
    heroText.classList.add('show-hero-text')
  } 

  buttons.forEach((item) => {
    if(!item.classList.contains('show-hero-button')) {
      item.classList.add('show-hero-button')
    }
  })
}

/**
 * 
 * @param {number} threshold 
 * @param {(entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void} callback 
 */
function createObserver(threshold, callback, element ) {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: threshold
  })

  observer.observe(element)
}


function animateAbout() {
  const about = document.querySelector('.about-us')

  createObserver(.35, (entries, observer) => {
  
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        const about = entry.target ;

        if(!about.classList.contains('show-about-us')) {
          about.classList.add('show-about-us') ;
        }
        observer.unobserve(entry.target)
      }
  
    })
  }, about) ;
}

// function animateContactUs() {
//   const contactUs = document.querySelector('.contact-us')

//   createObserver(.4, (entries, observer) => {
  
//     entries.forEach((entry) => {

//       if(entry.isIntersecting) {
//         const contactUs = entry.target ;

//         if(!contactUs.classList.contains('show-contact-us')) {
//           contactUs.classList.add('show-contact-us') ;
//         }
//         observer.unobserve(entry.target)
//       }
  
//     })
//   }, contactUs) ;
// }

// function animateServices() {
//   const services = document.querySelector('.services')

//   createObserver(.3, (entries, observer) => {
  
//     entries.forEach((entry) => {

//       if(entry.isIntersecting) {
//         const services = entry.target ;

//         if(!services.classList.contains('show-services')) {
//           services.classList.add('show-services') ;
//         }
//         observer.unobserve(entry.target)
//       }
  
//     })
//   }, services) ;
// }

// function animateTestimonials() {
//   const testimonials = document.querySelector('.testimonials')

//   createObserver(.4, (entries, observer) => {
  
//     entries.forEach((entry) => {

//       if(entry.isIntersecting) {
//         const testimonials = entry.target ;

//         if(!testimonials.classList.contains('show-testimonials')) {
//           testimonials.classList.add('show-testimonials') ;
//         }
//         observer.unobserve(entry.target)
//       }
  
//     })
//   }, testimonials) ;
// }

// const form = document.forms[0] ;

// form.addEventListener('submit', async (e) => {
//   e.preventDefault() ;

//   const data = new FormData(e.target) ;

//   const response = await fetch('./contact.php', { method: 'post', body: data })
//   const datas = await response.json() ;

//   // for(let i of data.entries()) {
//   //   console.log(i);
//   // }

//   console.log(datas);
// })