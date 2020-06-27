window.onscroll=()=>fun()

const navBar=document.getElementById("navBar");
const navBarHeight = navBar.offsetHeight;
const navBarOffSetTop = navBar.offsetTop;

const aboutHeaderTitle= document.getElementById("aboutHeaderTitle")
const aboutContent = document.getElementById("aboutContent")
const aboutCard = document.getElementById("about")
const aboutCardHeight = aboutCard.offsetHeight

const header = document.querySelector("header")
const headerheight = header.offsetHeight


const educationCard = document.getElementById("education");

const skillsCard = document.getElementById("skills");

const experienceCard = document.getElementById("experience");

const extraCard = document.getElementById("extra")


const viewportHeight =  (window.innerHeight || document.documentElement.clientHeight)
const viewportWidth = (window.innerWidth || document.documentElement.clientWidth)

const navBarButtom = document.getElementsByClassName("headButton")

const fun = () =>{
    if (window.pageYOffset >= navBarOffSetTop) {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    aboutHeaderTitle.classList.remove("opac")
    aboutContent.classList.remove("opac")
    for(let i=0;i<navBarButtom.length;i++){
        navBarButtom[i].className="headButton"
    }
    if(header.getBoundingClientRect().top>=0){
        for(let i=0;i<navBarButtom.length;i++){
            navBarButtom[i].className="headButton navBarOpac"
        }
    }
    if(header.getBoundingClientRect().top>=0){
        aboutHeaderTitle.classList.add("opac")
        aboutContent.classList.add("opac")
    }
    if(header.getBoundingClientRect().top<=(-(headerheight/2))){
        aboutLink.classList.add("redColor")
    }
    if(header.getBoundingClientRect().top>=(-(headerheight/2))){
        aboutLink.classList.remove("redColor")
    }
    if(educationCard.getBoundingClientRect().top<=viewportHeight){
        educationCard.classList.add("transSlideFromBottom")
    }
    if(educationCard.getBoundingClientRect().top<=((0.4*(aboutCard.offsetHeight))+navBarHeight)){
        aboutLink.classList.remove("redColor");
        educationLink.classList.add("redColor")
    }
    if(educationCard.getBoundingClientRect().top>=((0.4*(aboutCard.offsetHeight))+navBarHeight)){
        educationLink.classList.remove("redColor")
    }
    if(skillsCard.getBoundingClientRect().top<=viewportHeight){
        skillsCard.classList.add("transSlideFromBottom")
    }
    if(skillsCard.getBoundingClientRect().top<=((0.4*(educationCard.offsetHeight))+navBarHeight)){
        educationLink.classList.remove("redColor");
        skillsLink.classList.add("redColor")
    }
    if(skillsCard.getBoundingClientRect().top>=((0.4*(educationCard.offsetHeight))+navBarHeight)){
        skillsLink.classList.remove("redColor")
    }
    if(experienceCard.getBoundingClientRect().top<=((0.2*(skillsCard.offsetHeight))+navBarHeight)){
        skillsLink.classList.remove("redColor");
        experienceLink.classList.add("redColor")
    }
    if(experienceCard.getBoundingClientRect().top>=((0.2*(skillsCard.offsetHeight))+navBarHeight)){
        experienceLink.classList.remove("redColor")
    }
    if(experienceCard.getBoundingClientRect().top<=viewportHeight){
        experienceCard.classList.add("transSlideFromBottom")
    }
    if(extraCard.getBoundingClientRect().top<=((0.5*(experienceCard.offsetHeight))+navBarHeight)){
        experienceLink.classList.remove("redColor");
        extraLink.classList.add("redColor")
    }
    if(extraCard.getBoundingClientRect().top>=((0.5*(experienceCard.offsetHeight))+navBarHeight)){
        extraLink.classList.remove("redColor")
    }
    if(extraCard.getBoundingClientRect().top<=viewportHeight){
        extraCard.classList.add("transSlideFromBottom")
    }
    
}


/*const sectionHeaderBorder = `${viewportWidth*0.012}px`

const cards = document.getElementsByClassName("card")
for (let i=0; i<cards.length;i++){
   cards[i].style.borderRadius= sectionHeaderBorder;
}

console.log(sectionHeaderBorder)
*/

