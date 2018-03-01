function Mostrar()
{
    var numero = parseInt(prompt("ingrese el número"));
    var contPares = 0;

    for(var i=1; i<= numero; i++)
    {
        if (i % 2 == 0)
        {
            contPares++;
            console.log(i);
        }
    }
console.log("Se encontraron " + contPares + " numeros pares");


}//FIN DE LA FUNCIÓN