window.onscroll = () =>verifyResumen()
const viewPort = {
  height: (window.innerHeight || document.documentElement.clientHeight),
}

const navBarDim = {
  height: document.getElementById('navBar').offsetHeight,
}


const verifyResumen = () =>{
  const resumen = document.getElementById('Resumen');
  const prop = {
    top: resumen.getBoundingClientRect().top,
    height:resumen.offsetHeight,
    marginBottom: resumen.getCom
  }
  const verRes = prop.top>-(prop.height-navBarDim.height);
  if(verRes)
    {
      document.getElementById("aboutLink").classList.add("redTitle")
      
    }else{
      document.getElementById("aboutLink").classList.remove("redTitle")
    }
}

console.log(verifyResumen())

