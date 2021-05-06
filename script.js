function extraerInformacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var descuento = parseInt(document.getElementById("descuento").value);
    var numero = parseInt(document.getElementById("precioTotal").value);
    
    var resultado = calcularDescuento(descuento, numero)

    document.getElementById("nombreApellido").innerText = nombre + " " + apellido;
    document.getElementById("total").innerText = "El precio con el " + descuento + "% de descuento es: " + resultado;

    calcularDescuento(descuento, numero);
}

function calcularDescuento(descuento, numero){
    var resultado = descuento * numero / 100;
    resultado = numero - descuento;
    return resultado;
}

