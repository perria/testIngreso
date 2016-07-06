function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
if(edad>=18)
{
	alert("Usted es mayor de 18 años.");
}

else{
	alert("Usted es menor de edad.");
}
//no hace falta el else porque solo pedia mayor.

}//FIN DE LA FUNCIÓN