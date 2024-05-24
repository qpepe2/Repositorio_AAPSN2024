
/* EJERCIOCIOS 10*/

alert("prueba!!!")

let nombre = "Carlo";
let apellido = "Perex";

let nomApell= nombre + " " + apellido;
console.log ("El nombre y apellido es " + nomApell);


let numero1 = 11;
let numero2 = 22;
let suma1 = numero1 + numero2;

console.log ("El primer numero es " + numero1 + ", el segundo número es "+ numero2 + ", y su suma da "+ suma1);

let suma2 = suma1 + 100

console.log ("La adición de 100 a la suma de los 2 primeros número da " + suma2)

let varBooleana = true;
let suma3 = suma2 * varBooleana;
let suma4 = suma2 + nomApell;

console.log ("La multiplicación de una variable numérica y una variable booleana da "+ suma3)
console.log ("La suma de una variable numerica y una variable string da "+ suma4)


/* EJERCICIOS 11a*/

/*
let helado = 45;
let precioT;
let precioFinal;




const button = document.querySelector("button");

button.onclick = function () 
{
    let topping = prompt("Seleccionar un tipping: oreo / kitkat / kinder = ");
    function calcPrecio(top)
    {
        if (top==="oreo")
            {
            precioT = 10;
            }
            else if (top==="kitkat")
                {
                precioT = 15;
                }
                else if (top==="kinder")
                    {
                    precioT = 25;
                    }
                else 
                    {
                    precioT = 0;
                    }
    }

    calcPrecio(topping)
    precioFinal = helado + precioT;
    if (precioT < 1) 
        {
            alert(" No disponemos de "+topping+". El precio final del Helado sin topping es de $ "+ precioFinal)
        }
        else
        {
            alert("El precio final del Helado y topping de "+topping+" es de $ "+ precioFinal)
        }
}


/*EJERCICIO 11b*/

/*

let bebida;

const button = document.querySelector("button");

button.onclick = function () 
{
    let menu = prompt("Seleccionar un menú: vaca / pescado / verdura = ");
    function bebidaMenu(top)
    {
        switch (menu)
            {
                case "vaca" : alert("Se recomienda acompañarlo con un vino tinto");
                break;
                case "pescado" : alert ("El acompañamiento recomendado es vino blanco");
                break;
                case "verdura" : alert ("El acompañamiento ideal para unas verduras es agua fresca");
                break;
                default: alert ("Seleccione nuevamente un menú. Disponemos de: vaca, pescado o verdura")
            }
    }
    bebidaMenu(menu)
}

/*ejercicio 11c*/

console.log ("Ejercicio 11 c")
let temasAAPSN2024 = ["Bienvenida y HMTL-1", "GIT & GITHUB", "HTML-2", "HTML-3", "CSS-1", "CSS-2", "CSS-3", "Bootstrap", "JS-1","JS-2"]
function temas(curso)
{
    for (let i=0; i<curso.length;i++)
        {
            console.log ("La clase "+ i + " se dará el tema " + curso[i]);
        }
}
temas(temasAAPSN2024);

temasAAPSN2024.push("Proyecto Final");

temas(temasAAPSN2024);

/*ejercicio 11d*/

console.log("Ejercicio 11 d")

let numero = 0;

while (numero <=11)
    {
        console.log("la variable numero contiene el valor = " + numero + ", que es menor o igual a 11")
        numero = numero + 1;
    }



/*ejercicio 12*/
console.log("Ejercicio 12")

const button = document.querySelector("button");

button.onclick = function () 
{
    
    let nombre12 = prompt(" Indique su nombre = ");
    function validar(name)
    {
        while (name === null )
            {
            name = prompt("Indique su nombre, por favor =");
            }

    }

    validar(nombre12);
    alert ("Bienvenido a nuestra web "+nombre12);
}

