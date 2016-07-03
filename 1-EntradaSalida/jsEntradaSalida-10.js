/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

    descuento=parseInt(importe)*0.25;
	resultado=parseInt(importe)-parseInt(descuento);
	
	document.getElementById('resultado').value=resultado;
	alert(resultado);
}
