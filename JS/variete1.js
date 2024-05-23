let edad = prompt("Por favor, indicar su edad antes de continuar:");

while (isNaN(edad)){
    edad = prompt("Por favor, indicar su edad antes de continuar:");
}
if (edad>=18){
    alert ( "¡Bienvenid@ a la web de Variete!" );
}
else{
    alert ( "ADVERTENCIA: Ud. es menor de edad, está ingresando al sitio bajo su responsabilidad");
}

