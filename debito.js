let saldo = 100;

function debitar(valor){
    if ( valor <= 0){
        console.log("Valor invalido")
    }else if (valor > saldo){
        console.log("Saldo insuficiente")
    }else{
        saldo -= valor //saldo = saldo - valor
        console.log("Saldo final " + saldo)
    }
}

debitar(5)



