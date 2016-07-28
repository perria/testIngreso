/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad=prompt("Ingrese edad");
 
while(edad<18 || edad>90)
{
	edad=prompt("Ingrese edad");
}

document.getElementById('Edad').value=edad;
alert("Su edad es: "+edad);

var sexo=prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
	sexo=prompt("ingrese f ó m .");

	if(sexo=="f" && sexo=="m")
	{
		break;
	}
}

document.getElementById('Sexo').value=sexo;
alert("Su sexo es: "+sexo);

var estadoCivil=prompt("Ingrese estado civil 1-para soltero, 2-para casado, 3-para divorciado, 4-para viudo");

switch(estadoCivil)
{
	case 1:
	document.getElementById('EstadoCivil').value="soltero";
	break;
	case 2:
	document.getElementById('EstadoCivil').value="soltero";
	break;
	case 3:
	document.getElementById('EstadoCivil').value="soltero";
	break;
	case 4:
	document.getElementById('EstadoCivil').value="soltero";
	break;

	default:
	estadoCivil=prompt("Ingrese estado civil 1-para soltero, 2-para casado, 3-para divorciado, 4-para viudo");
}

while(estadoCivil<1 || estadoCivil>4)
{
	estadoCivil=prompt("Ingrese estado civil 1-para soltero, 2-para casado, 3-para divorciado, 4-para viudo");
}

document.getElementById('EstadoCivil').value=estadoCivil;
alert("Usted es: "+estadoCivil);

var sueldoBruto=prompt("Ingreso suledo bruto", "8000");

while(sueldoBruto<7999)
{
	sueldoBruto=prompt("Ingreso suledo bruto", "8000");
}

document.getElementById('Sueldo').value=sueldoBruto;
alert("Su sueldo bruto es: $"+sueldoBruto);

var legajo=prompt("Ingrese legajo");

while(legajo<1000||legajo>9999)
{
	legajo=prompt("Ingrese legajo");
}

document.getElementById('Legajo').value=legajo;
alert("Su numero de legajo es: "+legajo);

var nacionalidad=prompt("Ingrese nacionalidad E para extranjero, A para argentino, N para nacionalizados");

while(nacionalidad!=E || nacionalidad!=A || nacionalidad!=N)
{
	nacionalidad=prompt("Ingrese nacionalidad E para extranjero, A para argentino, N para nacionalizados");
}

document.getElementById('Nacionalidad').value=nacionalidad;
alert("Usted es: "+nacionalidad);



}

