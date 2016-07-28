function Mostrar()
{

	var contador=5;
	var acumulador=0;

	while(contador>0)
	{
		alert("contador:"+contador);
		contador=contador++; //otra forma de hacer la resta es contador--; o sumar contador++;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN