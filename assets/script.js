// Form Verify

const formfield = document.querySelectorAll("[required]");

formfield.forEach((field) => {
  field.addEventListener("blur", () => fieldVerify(field));
  field.addEventListener("invalid", event => event.preventDefault());
});

const errorList = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
];

const messageList = {
  name: {
      valueMissing: "Por favor, preencha este campo.",
      patternMismatch: "Por favor, preencha com um nome válido.",
      tooShort: "Por favor, preencha com um nome válido."
  },
  email: {
      valueMissing: "Por favor, preencha este campo.",
      typeMismatch: "Por favor, preencha um email válido.",
      tooShort: "Por favor, preencha um e-mail válido."
  },
  subject: {
    valueMissing: "Por favor, preencha este campo.",
  },
  message: {
    valueMissing: "Por favor, preencha este campo.",
  },
};

function fieldVerify(field) {
  let message = "";
  field.setCustomValidity("");

  errorList.forEach(error => {
      if (field.validity[error]) {
          message = messageList[field.name][error];
      }
  });

  const messageError = field.parentNode.querySelector(".message");
  const validityInput = field.checkValidity();

  if (!validityInput) {
      messageError.textContent = message;
  } else {
      messageError.textContent = "";
  }
}



// Menu Mobile

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", function (){
  let menuMobile = document.querySelector('.mobile-nav');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.ico').src = "assets/img/open.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.ico').src = "assets/img/close.svg";
  }
})

closeMenu.addEventListener("click", function (){
  let menuMobile = document.querySelector('.mobile-nav');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.ico').src = "assets/img/open.svg";
  }
})

// Accordion Skills
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