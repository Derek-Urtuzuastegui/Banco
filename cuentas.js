var cuentas= [
{nombre:'Mali', contraseña:'contraseña123'},
{nombre:'Gera', contraseña:'admin123'},
{nombre:'Maui', contraseña:'mayo1973'}]
function iniciar(){
    
    var validacion = document.getElementById('usuarios').value
    var validacionContraseña = document.getElementById('contraseña').value
    
    if(validacion == cuentas[0].nombre && validacionContraseña == cuentas[0].contraseña){
        console.log('ola')
        window.location.href = './mali/indexMali.html'
        return false
    }else if(validacion == cuentas[1].nombre && validacionContraseña == cuentas[1].contraseña){
        location.href = './gera/indexGera.html'
        return false
    }else if(validacion == cuentas[2].nombre && validacionContraseña == cuentas[2].contraseña){
        window.location.href = './maui/indexMaui.html'
        return false
    }
    else{
        alert('el usuario ingresado o la contraseña son incorrectos, porfavor vuelvalo a intentar')
    }
}