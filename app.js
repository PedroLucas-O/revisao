function imprimirOlaMundo () {
    console.log ('Olá mundo!');
}

imprimirOlaMundo ()

function recebendoNome (nome) {
    console.log (`Olá ${nome}`)
}

recebendoNome ('nome1')
recebendoNome ('nome2')
recebendoNome ('nome3')

function recebendoNumero (numero1, numero2) {
    console.log (numero1 + numero2)
    // return (numero1 + numero2)
}

recebendoNumero(3, 4)

const retorno = recebendoNumero (3, 4)
console.log (retorno)

function arrayDeNumeros (array) {
    const novoArray = []
    novoArray.push (array [0])
    return novoArray 
}

let retornaArray = arrayDeNumeros ([1, 2, 3])
console.log(retornaArray)