

function verificarMaiorIdade(idade) {

    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';

}

console.log(verificarMaiorIdade(19));

function orderArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(orderArray());

function meusDados() {
    let pessoa = {
        nome: 'jhon doe',
        idade: '30',
        cidade: 'New York'
    }

    pessoa.nome = 'Amanda';
    delete pessoa.idade;
    pessoa.cidade = 'Cianorte';

    return pessoa;
}

console.log(meusDados());

// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short... 
function manipulaArray() {
    let animais = ['cachorro', 'gato', 'abelha', 'rato', 'leão',  'galinha']

    let ordemAlfabetica = animais.sort();
    let firstPosition = animais[0];
    let lastPosition = animais[animais.length - 1];
    let ArraySize = animais.length;

    return console.log('Ordem alfabética: '+ ordemAlfabetica +'\n'+'Primeira posição:'+ firstPosition +'\n'+'Última posição: '+ lastPosition +'\n'+'Tamanho do array: '+ArraySize);       
        
    
 }

 manipulaArray();