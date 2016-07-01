/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre=prompt("Ingrese su nombre", "ailen");
	document.getElementById('elNombre').value=nombre;
}

