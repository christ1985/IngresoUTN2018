function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	
	
	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		if (numero > 0)
	{
		positivo = positivo + numero;
	}
	else
	{
		negativo = negativo * numero;
		contador++;
	}	
	respuesta = prompt("Ingrese s para continuar agregando numeros");
	}while (respuesta == "s");
	


document.getElementById('suma').value=positivo;
if (contador = 0)
{
negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN