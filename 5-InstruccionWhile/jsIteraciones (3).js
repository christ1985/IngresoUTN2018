function Mostrar()
{

var clave = prompt("ingrese el número clave.");
//while(!(clave == "utn750"))
while(clave != "utn750")
{
    alert("Clave erronea, intentelo de nuevo");
    clave=prompt("ingrese el número clave.");
    // Podria ser tambien sin el alert y poner en el prompt el error
    
}
alert("Clave correcta")
}//FIN DE LA FUNCIÓN
