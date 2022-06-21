let saludo = document.createElement("s");

let seccion = prompt("Si quiere seguir comprando ingrese: permanecer y quiere finalizar ingrese: finalizar")

if(seccion === "permanecer"){
  saludo.innerHTML = "<h2>Usted quiere permanecer en la pagina</h2>";
}else if(seccion == "finalizar"){
  saludo.innerHTML = "<h2>Su mensaje fue enviado</h2>";
}else{
  saludo.innerHTML = "<h2>Usted esta en la seccion contacto</h2>";
}

document.body.append(saludo);