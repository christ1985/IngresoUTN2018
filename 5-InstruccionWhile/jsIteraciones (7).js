function Mostrar()
{

	//var contador=0;
	//var acumulador=0;
	//var respuesta='si';
	//var respuesta;

	//var ingreso;
	
	/*do
	{
		ingreso = parseInt(prompt("Ingrese un numero: "));
		acumulador = parseInt(acumulador);	
		acumulador = acumulador + ingreso;
		contador++;
		respuesta = prompt("desea sumar otro numero?");

	}while(respuesta =='si');


	//while(respuesta =='si')	
	//{
	//	
	//	//document.getElementById("FormIngreso").value=acumulador;
	//	ingreso = prompt("ingrese el numero a sumar");
	//	ingreso = parseInt(ingreso);
	//	acumulador = acumulador + ingreso;
	//	respuesta = prompt("desea sumar otro numero?");
	//	contador++;
	//	//Acumulador = acumulador + parseint(ingreso)
	}


//document.getElementById('suma').value=acumulador;
//document.getElementById('promedio').value=acumulador/contador;

//FIN DE LA FUNCIÓN
*/

var numero;
var contador=0;
var acumulador=0;
var respuesta;
var promedio;

do
{
	numero = parseInt(prompt("Ingrese un numero: "));
	contador = contador + 1;
	acumulador = acumulador + numero;
	respuesta = prompt("desea continuar? s/n");
	
}while ((respuesta == "s" && respuesta == "S") || (respuesta != "n" && respuesta != "n"));

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador / contador;
}