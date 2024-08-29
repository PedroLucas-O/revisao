let palavra = ["carro", "cenoura", "nuvem"];
let numero = [1, 2, 3];
let variado = ["palavra", 1, true];
let unico = [4];
let vazio = [];
let numero2 = [1, 2, 3, 4, 5];
console.log(palavra.length);
console.log(palavra[3]);
console.log(palavra.includes("carro"));
console.log(unico);

let newWord = {...palavra};
console.log(palavra);
newWord = ["carro", "cenoura", "nuvem", "casamento"]
console.log(newWord);
numero.push(4)

let copiaNumero2 = numero2.slice()
copiaNumero2.splice(4, 1)
copiaNumero2.splice(1, 1)
copiaNumero2.push(6)
console.log(copiaNumero2)