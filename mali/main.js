var cantidad = 200;
var fondo = document.getElementById('cantidadNumero');
var saldoDisponible = document.getElementById('saldoDisponible')
var motivo = ('No fue posible realizar la accion: ');
var NIP = '3214'
fondo.innerHTML = '$' + cantidad
saldoDisponible.innerHTML = '$' + (990-cantidad)
function depositar(){
    var cantidadIngresar = document.getElementById('cantidadIngresar').value
    var olaNumero = parseFloat(cantidadIngresar)
    var saldoMaximo =('Una dsiculpa, solo es posible tener $990 en la cuenta por lo que $' + olaNumero + ' no fue posible ingresarlos a su cuenta');
    if(olaNumero>0){
       NIP = parseInt(prompt('porfavor ingresse su NIP para seguir con la operacion'))
       if(NIP == '3214'){
        cantidad+=olaNumero
       }else{
        alert('Lo siento su nip es incorrecto, intentelo nuevamente')
       }
    }
    else{
        alert(motivo + 'Cantidad no valida')
    }
    if(cantidad>990){
        cantidad-=olaNumero
        alert(saldoMaximo)
    }
    fondo.innerHTML = '$' + cantidad
    saldoDisponible.innerHTML = '$' + (990-cantidad)
    cantidades.reset();
}
function retirar(){
    var cantidadIngresar = document.getElementById('cantidadIngresar').value
    var olaNumero = parseFloat(cantidadIngresar)
    if(olaNumero>0 && cantidad<990){
        NIP = parseInt(prompt('porfavor ingresse su NIP para seguir con la operacion'))
       if(NIP == '3214'){
        cantidad-=olaNumero
       }else{
        alert('Lo siento su nip es incorrecto, intentelo nuevamente')
       }
    }else{
        alert(motivo + 'Cantidad no valida')
    }
    if(cantidad<10){
        cantidad+=olaNumero
        alert(motivo + 'Fondos insuficientes')
    }
    fondo.innerHTML = '$' + cantidad
    saldoDisponible.innerHTML = '$' + (990-cantidad)
    cantidades.reset();
}
