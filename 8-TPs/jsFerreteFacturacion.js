/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	numeroUno=document.getElementById('PrecioUno').value;
	var numeroDos;
	numeroDos=document.getElementById('PrecioDos').value;
	var numeroTres;
	numeroTres=document.getElementById('PrecioTres').value;

	resultado=parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);

	alert("El resultado es: "+resultado);


}
function Promedio () 
{
	var numeroUno;
	numeroUno=document.getElementById('PrecioUno').value;
	var numeroDos;
	numeroDos=document.getElementById('PrecioDos').value;
	var numeroTres;
	numeroTres=document.getElementById('PrecioTres').value;
	var resultadoDos;

	resultado=parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);
	resultadoDos=parseInt(resultado)/3;

	alert("El resultado es: "+resultadoDos);


}
function PrecioFinal () 
{
	var numeroUno
	numeroUno=document.getElementById('PrecioUno').value;
	var numeroDos;
	numeroDos=document.getElementById('PrecioDos').value;
	var numeroTres;
	numeroTres=document.getElementById('PrecioTres').value;
	var resultadoDos;

	resultado=parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres);
	resultadoDos=parseInt(resultado)*1.21;

	alert("El resultado es: "+resultadoDos);
}