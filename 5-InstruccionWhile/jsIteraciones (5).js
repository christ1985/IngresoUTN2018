function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while( sexo != "f" && sexo != "m" )
{
    sexo = prompt("reingrese f para femenino ó m para masculino .");

}

if(sexo == 'f')
{
    sexo = "femenino";
}
else
{
    sexo = "masculino";
}

document.getElementById("Sexo").value=sexo;


}//FIN DE LA FUNCIÓN