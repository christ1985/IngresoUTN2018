function Mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById("Sexo").value=sexo;

while(!(sexo == "f" && sexo == "m" ))
{
    sexo = prompt("reingrese f para femenino ó m para masculino .");
}
document.getElementById.value = sexo;


}//FIN DE LA FUNCIÓN