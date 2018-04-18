var colors = document.querySelectorAll("input[type='color']");
var h3 = document.querySelector("h3");
var direccion = document.querySelector("#direccion");
var body = document.querySelector("body");


//para que cuando cambie algun color se le añada el texto al h3
function executeColorEvent (color) {
  color.addEventListener("change",addColorGradientText);
}

//para retornar la direccion
function direccionValue() {
  return direccion.value;
}

//para que cuando cambie la direccion se le añada al h3
function executeDireccionEvent () {
  direccion.addEventListener("change",addColorGradientText);
}

//para agregar el lineargradient
function appendLinearGradient() {
  h3.appendChild(document.createTextNode("linear-gradient(to "+direccionValue()+","+colors[0].value+","+colors[1].value+");"));
}

//para crear el texto al h3
function addColorGradientText() {
    if(!h3.hasChildNodes()){
      appendLinearGradient();
      addLinearGradientToBody ();
    }else {
      h3.removeChild(h3.childNodes[0]);
      appendLinearGradient();
      addLinearGradientToBody ();
    }
  }


//para añadir el lineargradient al cuerpo de la pag
function addLinearGradientToBody (){
  body.style.background = "linear-gradient(to "+direccionValue()+","+colors[0].value+","+colors[1].value+")";
}



//para ejecutar la funcion
executeDireccionEvent();
//para agregarle el evento change a cada input del color
colors.forEach(executeColorEvent);





