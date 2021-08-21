let usera = "fab";
let pass = "1234";
let saldo = 50000;

let userin = prompt("Ingrese su Nombre de usuario");
let passin = prompt("ingrese su contraseña");

if(usera == userin && pass == passin){
    alert("Bienvenido "+userin);
    let retiro = prompt("Cuanto dinero queres retirar, su saldo es de "+saldo+" pesos");
    if(parseInt(retiro)<saldo){
        let ta = confirm("Desea retirar "+retiro+" pesos?")
        if(ta==true){
            alert("Usted retiro "+retiro+" pesos, su saldo actual es de "+(saldo-retiro)+" pesos")
        }
        else{
            alert("Sesion Cerrada")
        }
        
    }
    else{
        alert("Saldo insuficiente")
    }
}
else{
    alert("Usuario/contraseña incorrectos")
}
