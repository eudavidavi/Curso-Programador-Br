//Objeto e array vazios.
var obj = {}
var arr = []

// três formas de criar objetos

//1. Cria já com os valores dentro
var objeto = {nome:"valor", outroNome: "outro valor"}

//2. Atraves de uma função
function nomeCompleto(name, lastName) {
    return { nome: name, sobrenome: lastName}
}

//3. Protótipo
function nomeCompleto2(name, lastName) {
    this.nome = name;
    this.sobrenome = lastName;
}

//Para imprimir é preciso passar os valores
var nomeImpresso = new nomeCompleto2 ("nome", "sobrenome");

console.log(nomeImpresso);