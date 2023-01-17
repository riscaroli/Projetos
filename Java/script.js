// Console

console.error('Este é o erro!')

console.log('Meu nome é Gabriel!')

console.warn('Este é um aviso!')

// Variáveis

var x = 10    //<-- Pode mudar de valor

// Maneiras modernas/melhores

let y = 15    //<-- Pode mudar de valor

const z = 20  //<-- Não muda de valor de preferência este

// Tipos de dados

const nome = 'Gabriel'

const true_or_false = true

let surprise = null

let age //<-- Incorreto

const lista = ['Gabriel','Crislei','Luciano']

const usuario = {email: 'gabriel.riscarolli@unidavi.edu.br', password: 'teste123', age: 30} //<-- Object literals

console.log(typeof nome) //<-- Validação String

console.log(typeof z) //<-- Validação Number

console.log(typeof true_or_false) //<-- Validação Boolean

console.log(typeof surprise) //<-- Validação Object

console.log(typeof age) //<-- Validação Undefined

console.log(typeof lista) //<-- Validação Array

console.log(typeof usuario) //<-- Validação Object literals

// Métodos de String

const nome_completo = 'Gabriel Ari Riscarolli'

console.log(nome_completo.length)  //<-- Contagem de caractéries

console.log(nome_completo.toLocaleLowerCase())  // Muda a letra para minúscula

console.log(nome_completo.toLocaleUpperCase())  // Muda a letra para maiúscula

const nome_lista = nome_completo.split(' ')  //<-- Separação com caractéres

console.log(nome_lista)

console.log(nome_completo.indexOf('Riscarolli'))  // Número de Caractéries até a palavra escrita

console.log(nome_completo.slice(0, 11)) // Extrair uma parte de uma string

// Métodos de Arrays

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

list[10] = 11

const[n1, n2] = list  //<-- Extrai a váriavel da lista

console.log(list.length)  //<-- Contagem de elementos

console.log(list[2])  //<-- Extrair um elemento específico do array

console.log(list)

console.log(list[list.length - 1 ])  //<-- Pegar o último elemento da lista

list.push(12)   // Add um elemento

console.log(list)

list.pop() // Remove o elemento final do array

console.log(list)

list.shift()  //Remove o primeiro elemento

list.unshift()  // Add o primeiro elemento

// Objetos

const produtos = {
    Nome: 'Kombi',
    Preço: 8000,
    Estoque: true, 
    Ano: ['1970','1980','1990'],
}
console.log(produtos.Nome) // Igual a console.log(produtos['Nome'])

// Destructuring

const{Preço, Estoque} = produtos  //<-- Extrai a váriavel da lista

console.log(Preço)

console.log(Estoque)

// JSON - JavaScript Object Notation 

const dog = {
    Name: 'Shark', Age: 10
}
const json = JSON.stringify(dog) // Coverter para JSON

console.log(json)

const obj = JSON.parse(json)  // Converter para o JS

console.log(obj)

// Estruturas Condicionais 

const a = 10
const b = 'Gabriel'

if(a > 9){
    console.log('True')
}
else{
    console.log('False')
}

// '==' Valor da Váriavel é igual e '===' Valor e tipo são identicos

if(b === 'Marcos'){
    console.log('True')
}
else if(b === 'Jonathan'){
    console.log('True')
}
else{
    console.log('False')
}

// IF ternário

const somaNumero = 99

let testeNumero = somaNumero > 20 ? 'Yes' : 'No'

console.log(testeNumero)

// Estruturas de repetição

const mylist = [1, 2, 3, 4, 5]
let counter = 0

while(counter < mylist.length){
    console.log('Imprimindo: '+mylist[counter])
    counter++
}

const mylist2 = ['A','B','C','D','E']

for(let counter = 0;counter < mylist2.length;counter++){
    console.log('Imprimindo: '+mylist2[counter])
}

// Métodos de Arrays -> repetição

const names = ['Pedro', 'Matheus', 'João', 'Gabriel']

names.forEach(function (name) {
    console.log(`O nome é ${name}`) // Usasse crase
})

const modifica = names.map(function(name){
    if(name === 'Gabriel'){
        return (name = 'Sr. Gabriel')
    } else {
        return name
    }
})
console.log(modifica)

const bolinha = [1,2,3,4,5, 10,100,1000].filter(function (number) {
    return number >=5
})
console.log(bolinha)

const soma = [10,20,30,40,50].reduce(function (total, number){
    return total + number
})
console.log(soma)

// Funções

function minhafunction() {
    console.log('Opa')
}
minhafunction() //chama a function

function nomeC(nome, sobrenome) {
    return `O nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeC('Gabriel', 'Riscarolli'))

const nome2 = 'Riscarolli'
const nome1 = 'Luciano'

const MeuNomeC = nomeC(nome1, nome2)

console.log(MeuNomeC)

// Arrows Functions

const arrow = (a, b) => {
    return a + b
}
console.log(arrow(2, 5))

const simples = (a, b) => a + b    // Simplificado

console.log(simples(5, 5))

// Classes 

class Elemento {
    constructor(nome, preço){
        this.nome = nome
        this.preço = preço
    }
    dethalesElementos() {
        return `O nome do produto é ${this.nome} e o preço é R$${this.preço}`      //<-- Usar crase para isso
    }

}
const socks = new Elemento('Meias', 4.99)
const shirt = new Elemento('Camisa Preta', 19.99)

console.log(socks.nome)
console.log(socks.preço)

console.log(shirt.nome)
console.log(shirt.preço)

console.log(shirt.dethalesElementos())           //<-- Função com classes 
console.log(socks.dethalesElementos())

//  Herança de classes

class SuperElemento extends Elemento{
    constructor(nome, preço, estoque) {
        super(nome, preço) //Para usar dados da classe pai
        this.estoque = estoque
    }
    ver(adjetivo){
        return `O ${this.nome} é muito ${adjetivo}`
    }
    //static methods   reproduzir fora de classes podendo usa-lo em variadas classes de um mesmo código
    static opa(){
        console.log('Opa')
    }
}
const tenis = new SuperElemento('Air Jordan', 699.99, 20)
console.log(tenis.estoque)
console.log(tenis.ver('Bom'))
SuperElemento.opa()

//Front end com DOM

const title = document.getElementById('title')   //pegar com id

console.log(title)

//query selector mais prático 

const titulo = document.querySelector('#title')
console.log(titulo)

const texts = document.querySelectorAll('.text') //<-- Seleciona mais de um 

console.log(texts)  //Aparece em forma de arrays

console.log(texts[0])
console.log(texts[1])
console.log(texts[2])
console.log(texts[3])
console.log(texts[4])

texts.forEach((text) => {
    console.log(text.textContent)  //pode-se aplicar metódos de strings
})

//Mudando ou manipulando elementos

title.textContent = 'Mudei o titúlo'  //Mudanado o conteúdo da variável

texts[0].innerHTML = '<span>Atlterado com sucesso</span>'    //Alterando a estrutura do HTML juntamente com o texto

texts[1].style.backgroundColor = 'red'    // Estilizando

texts[2].classList.add('my-class')  //adicionando classes

texts[2].classList.remove('text')

texts[3].remove() //Removendo conteúdo do index

//Eventos

const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    texts[2].style.color = 'blue'
})