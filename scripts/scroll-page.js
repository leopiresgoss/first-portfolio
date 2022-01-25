const sectionsHeight = {
  header: document.querySelector('header'),
  headline: document.querySelector('#headline'),
  recentWorks: document.querySelector('#recent-works'),
  about: document.querySelector('#about-me'),
  contact: document.querySelector('#contact-form'),
}

function scrollChecker () {
  const currentLocation =  Math.floor(window.scrollY); 
  const recentWorksMin = sectionsHeight.header.offsetHeight + sectionsHeight.headline.offsetHeight;
  const aboutMin = recentWorksMin + sectionsHeight.recentWorks.offsetHeight;
  const contactMin = aboutMin + sectionsHeight.about.offsetHeight;  
  
  if (currentLocation > contactMin) {
    // #TODO
  } else if (currentLocation > aboutMin) {
    // # TODO
  } else if (currentLocation > recentWorksMin) {
    // # TODO
  }
}

document.addEventListener('scroll', scrollChecker)