const TesteImparPar = (n) =>{
    let calculoTeste = n % 2

    if (calculoTeste == 1) {
        return "Número Impar"
    } else {
        return "Númer Par"
    }
}

console.log (TesteImparPar(17))