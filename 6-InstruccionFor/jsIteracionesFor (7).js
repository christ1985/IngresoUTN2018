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

}
    
    //FIN DE LA FUNCIÓN