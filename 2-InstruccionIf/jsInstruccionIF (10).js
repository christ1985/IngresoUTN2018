function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random() * 10) + 1;
	
	if (numeroAleatorio > 7)
	{
		alert("Excelente")
	}		
	else if (numeroAleatorio > 3)
		{	
		alert("aprobado")
		}
	else
		{
		alert("Vamos la proxima vez")
		}
	
	
}//FIN DE LA FUNCIÓN