const button = document.querySelector("button");

button.onclick = function () 
{
  let distanciaSN = prompt("Indicar la distancia (km) desde San Nicolás de los Arroyos:");
    while (isNaN(distanciaSN)){
        distanciaSN = prompt("Indicar la distancia (km) desde San Nicolás de los Arroyos:");
    }
    function distancia(km){
        if (km>40){
            alert ( "El envío tiene un costo de AR$ 800,00" );
        }
        else{
            alert ( "El envío es sin cargo");
        }
    };
distancia(distanciaSN)
};
