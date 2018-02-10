function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if (( edad >= 13 ) && (edad <=17))
{
    alert("usted es adolescente");    
}
else
{
    if ( edad > 17)
    {
        alert("Usted es mayor de edad")
    }
    else 
    {
        alert("usted es un niño")
    }
    
}




}//FIN DE LA FUNCIÓN