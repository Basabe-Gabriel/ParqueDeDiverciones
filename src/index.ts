let aceptar = document.getElementById("boton");
let altura = document.getElementById("altura");

let alturaMax: Number = 1.3;
//let altura: number = 1.5;
let alt: number = Number(altura.value);

aceptar.addEventListener("click", () => {
  if (alt <= alturaMax) {
    console.log("No Sube");
  } else {
    console.log("Pasa");
  }
});
