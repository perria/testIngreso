/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	numeroUno=document.getElementById('numeroUno').value;
	var numeroDos;
	numeroDos=document.getElementById('numeroDos').value;

	//var resultado=numeroUno-numeroDos; esto resta.

	resultado=parseInt(numeroUno)+parseInt(numeroDos);

	alert("El resultado es: "+resultado);


}

