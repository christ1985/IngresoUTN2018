function Mostrar()
{

var acumulador=0;
var contador=0;
var ingreso;
acumulador = parseInt(acumulador);

	while(contador < 5)	
	{
		
		//document.getElementById("FormIngreso").value=acumulador;
		//ingreso = parseInt(prompt("Ingrese un numero: "));
		ingreso = prompt("ingrese el numero a sumar");
		ingreso = parseInt(ingreso);
		acumulador = acumulador + ingreso;
		contador++;
		//Acumulador = acumulador + parseint(ingreso)
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN