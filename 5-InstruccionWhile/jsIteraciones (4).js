function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero <=10 && numero >0))
	{
		numero = prompt("Reingrese un valor entre 0 y 10.");
	}
	alert("Usted escogio el numero "+numero);
	document. getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN