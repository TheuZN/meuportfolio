// Menu Mobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile_nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/open.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.svg";
    }
}

function menuClose() {
  let menuMobile = document.querySelector('.mobile_nav');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/open.svg";
  }
}

// Accordion Habilidades
const accordionTitles = document.querySelectorAll(".title-accordion");

  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
     const height = accordionTitle.nextElementSibling.scrollHeight;
     accordionTitle.classList.toggle("activite-accordion");
     if (accordionTitle.classList.contains("activite-accordion"))  {
       accordionTitle.nextElementSibling.style.maxHeight = `${height}px`; 
    } else {
        accordionTitle.nextElementSibling.style.maxHeight = "0px"; 
    }
  });
});