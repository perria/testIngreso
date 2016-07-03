/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  var largo;
  largo=document.getElementById('Largo').value;
  var ancho;
  ancho=document.getElementById('Ancho').value;
  var resultadoDos;
  var resultadoTres;

  resultado=parseInt(largo)+parseInt(ancho);
  resultadoDos=parseInt(resultado)*2;
  resultadoTres=parseInt(resultadoDos)*3;

  alert(resultadoTres);

}

function Circulo () 
{
	var radio;
	radio=document.getElementById('Radio').value;
	var resultadoDos;

	resultado=parseInt(radio)*6.28;
	resultadoDos=parseInt(resultado)*3;

	alert(resultadoDos);
	
}

function Materiales () 
{
	var largo;
	largo=document.getElementById('Largo').value;
	var ancho;
    ancho=document.getElementById('Ancho').value;
    var cemento;
    var cal;

    resultado=parseInt(largo)*parseInt(ancho);
    cemento=parseInt(resultado)*2;
    cal=parseInt(resultado)*3;

    alert("Cantidad de bolsas de cemento: "+cemento+" y cal: "+cal);
	
}