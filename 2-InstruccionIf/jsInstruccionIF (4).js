function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*if(edad>12&&edad<18)
{
	alert("Usted es adolescente.");
}*/

if(edad>12)//Otra forma, en este if entran las personas mayores de 13, pasan al if de abajo y si son menores de 18 aparece el alert.
{
	if(edad<18)
	{
		alert("Es adolescente");
	}
}
}//FIN DE LA FUNCIÓN