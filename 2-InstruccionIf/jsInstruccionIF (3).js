function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
if(edad>=18)
{
	alert("Usted es mayor de 18 años.");
}

if(edad<18)
{
	alert("Usted es menor de edad.")
}

//else{
	//alert("Usted es menor de edad.");} Lo comento porque no se podía usar else.

}//FIN DE LA FUNCIÓN