// Console

console.error("Este é o erro!")

console.log("Meu nome é Gabriel!")

console.warn("Este é um aviso!")

// Variáveis

var x = 10    //<-- Pode mudar de valor

// Maneiras modernas/melhores

let y = 15    //<-- Pode mudar de valor

const z = 20  //<-- Não muda de valor de preferência este

// Tipos de dados

const nome = "Gabriel"

const true_or_false = true

let surprise = null

let age //<-- Incorreto

const lista = ["Gabriel","Crislei","Luciano"]

const usuario = {email: "gabriel.riscarolli@unidavi.edu.br", password: "teste123", age: 30} //<-- Object literals

console.log(typeof nome) //<-- Validação String

console.log(typeof z) //<-- Validação Number

console.log(typeof true_or_false) //<-- Validação Boolean

console.log(typeof surprise) //<-- Validação Object

console.log(typeof age) //<-- Validação Undefined

console.log(typeof lista) //<-- Validação Array

console.log(typeof usuario) //<-- Validação Object literals

// Métodos de String

const nome_completo = "Gabriel Ari Riscarolli"

console.log(nome_completo.length)  //<-- Contagem de caractéries

console.log(nome_completo.toLocaleLowerCase())  // Muda a letra para minúscula

console.log(nome_completo.toLocaleUpperCase())  // Muda a letra para maiúscula

const nome_lista = nome_completo.split(" ")  //<-- Separação com caractéres

console.log(nome_lista)

console.log(nome_completo.indexOf("Riscarolli"))  // Número de Caractéries até a palavra escrita

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
    Nome: "Kombi",
    Preço: 8000,
    Estoque: true, 
    Ano: ["1970","1980","1990"],
}
console.log(produtos.Nome) // Igual a console.log(produtos["Nome"])

// Destructuring

const{Preço, Estoque} = produtos  //<-- Extrai a váriavel da lista

console.log(Preço)

console.log(Estoque)

// JSON - JavaScript Object Notation 

const dog = {
    Name: "Shark", Age: 10
}
const json = JSON.stringify(dog) // Coverter para JSON

console.log(json)

const obj = JSON.parse(json)  // Converter para o JS

console.log(obj)

// Estruturas Condicionais 

const a = 10
const b = "Gabriel"

if(a > 9){
    console.log("True")
}
else{
    console.log("False")
}

// "==" Valor da Váriavel é igual e "===" Valor e tipo são identicos

if(b === "Marcos"){
    console.log("True")
}
else if(b === "Jonathan"){
    console.log("True")
}
else{
    console.log("False")
}