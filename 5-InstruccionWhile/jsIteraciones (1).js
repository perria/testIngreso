function Mostrar()
{
	alert('iteración while');

	var contador=0; //Inicialización.

	/*if(contador<10) //Primer forma que probamos.
	{
		alert("mensaje"+contador);
	}
	contador=contador+1;
	if(contador<10)
	{
		alert("mensaje"+contador);
	}*/

	/*if(contador<10) //Segunda forma.
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}

	if(contador<10)
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}

	if(contador<10)
	{
		alert("mensaje"+contador);
		contador=contador+1;
	}*/
	

	//NUNCA SE HACE UNA INTERACCIÓN CON IF.

	//Formas de hacer con while:

	/*while(contador<10)
	{
		alert("mensaje"+contador);
		contador=contador+1; //Esto es la salida, tiene que estar siempre dentro del while,  sino tildas el navegador.
	}*/

	/*while(true)
	{
		alert("mensaje"+contador);
		
		if(contador==3)
		{
			break;
		}
		contador=contador+1;
	}*/

	while(true)
	{
		contador=contador+1;
		if(contador==3)
		{
			continue;      //Saltea el número 3.
		}
		alert("while"+contador);
		if(contador==6)
		{
			break;
		}
		alert("fin"+contador);
	}



	


}//FIN DE LA FUNCIÓN