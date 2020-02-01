/*window.onscroll = () => scrollFunction();
const viewportHeight = window.innerHeight;

const aboutSection = document.getElementById("aboutMe");
const aboutOffsetTop = aboutSection.offsetTop;
const aboutLink = document.getElementById("aboutLink");

const skillsSection = document.getElementById("skills");
const skillsOffsetTop = skillsSection.offsetTop;
const skillsLink = document.getElementById("skillsLink");

const educationSection = document.getElementById("education");
const educationOffsetTop = educationSection.offsetTop;
const educationLink = document.getElementById("educationLink");

const experienceSection = document.getElementById("experience");
const experienceOffsetTop = experienceSection.offsetTop;
const experienceLink = document.getElementById("experienceLink");

const extraSection = document.getElementById("extra");
const extraOffsetTop = extraSection.offsetTop;
const extraLink = document.getElementById("extraLink");



const scrollFunction = () => {
    if (window.pageYOffset >= aboutOffsetTop - 0.7 * viewportHeight && window.pageYOffset <= educationOffsetTop - 0.2 * viewportHeight) {
        aboutLink.classList.add("redTitle");
      }else {
        aboutLink.classList.remove("redTitle");
      }
    if (window.pageYOffset >= educationOffsetTop - 0.2 * viewportHeight && window.pageYOffset <= skillsOffsetTop - 0.2 * viewportHeight) {
        educationLink.classList.add("redTitle");
    } else {
        educationLink.classList.remove("redTitle");
    }  
    if (window.pageYOffset >= skillsOffsetTop - 0.2 * viewportHeight && window.pageYOffset <= experienceOffsetTop - 0.2 * viewportHeight) {
        skillsLink.classList.add("redTitle");
    }else {
        skillsLink.classList.remove("redTitle");
     }


     if (window.pageYOffset >= experienceOffsetTop - 0.2 * viewportHeight && window.pageYOffset <= extraOffsetTop - 0.2 * viewportHeight) {
        experienceLink.classList.add("redTitle");
      } else {
        experienceLink.classList.remove("redTitle");
      }
      if (window.pageYOffset >= extraOffsetTop - 0.2 * viewportHeight) {
        extraLink.classList.add("redTitle");
      } else {
        extraLink.classList.remove("redTitle");
      }



}
*/