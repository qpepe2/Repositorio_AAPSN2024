let nro = prompt("Por favor, indicar su edad antes de continuar");

function validacion(nro) {
    nro = parseInt(nro); //PARSEINT convierte el string en un número entero

    while (isNaN(nro)) {//isNaN devuelve true si el valor no es un número
        nro = parseInt(prompt("Por favor, indicar su edad antes de continuar")); //Si no es un número, se vuelve a pedir el ingreso
    }

    if (nro >= 18) { //
        alert("Bienvenid@ a la web Variete!");
    } else {
        alert("ADVERTENCIA: Ud. es menor de edad, se recomienda el acompañamiento de una persona mayor");
    }
}

validacion(nro);