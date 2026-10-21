let saldo = 500;

function credito(valor){
    if (valor <= 0){
        console.log('valor invalido')
    }else{
        saldo += valor
        console.log('Valor atual ' + saldo)
    }
}

credito(50)

//for/ listas