function Mostrar()
{
//tomo la edad  
var mesDelAño=document.getElementById('mes').value;

//alert(mesDelAño);

switch(mesDelAño)
{
    case "Enero": //puede ser un valore entero numero, palabra.

        alert("Es verano");

    break;

    case "Marzo":

        alert("A clases");

    break;

    case "Julio":

        alert("Se vienen las vacaciones");

    break;

    case "Diciembre":

        alert("Felices fiestas");

    break;
}


}//FIN DE LA FUNCIÓN