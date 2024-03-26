// console.log(typeof 5)
// console.log(typeof "Hello world")
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 % 2)
// console.log(`A soma de 2 + 2 = ${2 + 2}`)
// console.log(2 == 2)
// console.log(2 === 2)
// console.log(3 != 2)
// console.log(5 >= 5)
// console.log(3 != 3)
// console.log(3 !== 3)
// console.log(3 !== '3')
// console.log(3 > 2 || 2 < 1);
// console.log(3 > 2 && 2 < 1);
// console.log(true);
// console.log(!true)
// console.log(false)
// console.log(!false)

/*
const user = 'Lucas';
if (user === 'Lucas'){
    console.log('Usuário autenticado!');
}
else {
    console.log('Usuário inexistente');
}
*/

// const user = 'Lucas';
// user === 'Lucas' ? console.log('Usuário autenticado!') : console.log('Usuário inexistente');
/*
const curso = 'ENC';
switch(curso){
    case 'ENC':
        console.log('Engenharia da Computação');
        break;
    case 'ESW':
        console.log('Engenharia de Software');
        break;
    case 'EMC':
        console.log('Engenharia de Mecatrônica');
        break;
}
*/
/*
let j = 0;
while(j < 10){
    j++;
    console.log('indice: ', j);
}
*/
/*
let k = 10
do {
    console.log('indice: ', k)
    k++
} while (k < 10)
*/
/*
for(let i = 0; i < 10; i++) {
    if(i === 5) continue
    console.log('indice: ', i)
}
*/
/*
function define_par_ou_impar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} é par!`)
    
    } else {
        console.log(`${numero} é impar!`)
    }
}
define_par_ou_impar(5)
*/

const nomes = ['Lucas', 'Luiz', 'Gislaine']
/*
console.log(nomes)
console.log(nomes.length)
nomes[0] = 'Hugo'
console.log(nomes)
nomes.push('Maria')
nomes.unshift('Gabriel')
console.log(nomes)
*/

const filter_names = nomes.filter((nome) => nome.length === 4)
console.log(filter_names)

const found_names = nomes.find((nome) => nome.length >= 5)
console.log(found_names)

const found_index = nomes.findIndex((nome) => nome.length >= 5)
console.log(found_index)

const slice_names = nomes.slice(2, 4)
console.log(slice_names)

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

for(let nome of nomes) {
    console.log(nome)
}

nomes.map((nome) => console.log(nome));

let numeros = [1, 2, 3]
const numeros_mapeados = numeros.map((numero) => numero * 2)
console.log(numeros_mapeados)