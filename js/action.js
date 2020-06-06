window.onscroll = () =>verifyResumen()


const verifyResumen = () =>{
  let viewPort = {
    height: (window.innerHeight || document.documentElement.clientHeight),
  }
  
  const navBar = {
    height: document.getElementById('navBar').offsetHeight,
  }
  const header ={
    height: document.getElementById("Header").offsetHeight
  } 
  const resumen = document.getElementById('Resumen');
  const resumenProp = {
      top: resumen.getBoundingClientRect().top,
      height:resumen.offsetHeight,
  }
  const educacion = document.getElementById('Educacion')
  const educacionProp={
    top: educacion.getBoundingClientRect().top,
    height:educacion.offsetHeight
  }
  const habilidades= document.getElementById('Habilidades')
  const habilidadesProp={
    top: habilidades.getBoundingClientRect().top,
    height:habilidades.offsetHeight
  }
  const experiencia= document.getElementById('Experiencia')
  const experienciaProp={
    top: experiencia.getBoundingClientRect().top,
    height:experiencia.offsetHeight
  }
  const extra= document.getElementById('Extra')
  const extraProp={
    top: extra.getBoundingClientRect().top,
    height:extra.offsetHeight
  }
  if((resumenProp.top>=-(resumenProp.height-navBar.height) )&& (window.pageYOffset>header.height/2)){
    document.getElementById("aboutLink").classList.add("redTitle")
  }
  if (!((resumenProp.top>-(resumenProp.height-navBar.height) )&& (window.pageYOffset>header.height/2))){
    document.getElementById("aboutLink").classList.remove("redTitle")
  }
  if((!((resumenProp.top>=-(resumenProp.height-navBar.height) )))&& (educacionProp.top>-(educacionProp.height-navBar.height))){
    document.getElementById("educationLink").classList.add("redTitle")
  } 
  if(!((educacionProp.top<=(navBar.height+(0.02*viewPort.height) ))&& (educacionProp.top>-(educacionProp.height-navBar.height)))){
    document.getElementById("educationLink").classList.remove("redTitle")
  }
  if(!((educacionProp.top>-(educacionProp.height-navBar.height)))&&((habilidadesProp.top>-(habilidadesProp.height-navBar.height)))){
    document.getElementById("skillsLink").classList.add("redTitle")
  }
  if(!(!((educacionProp.top>-(educacionProp.height-navBar.height)))&&((habilidadesProp.top>-(habilidadesProp.height-navBar.height))))){
    document.getElementById("skillsLink").classList.remove("redTitle")
  }
}


//(educacionProp.top<=(navBar.height+(0.02*viewPort.height) )
