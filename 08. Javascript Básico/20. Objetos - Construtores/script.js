//Construtor: criar objeto a partir de uma função

function Pessoa (nome, sobrenome, idade) {
this.nome = nome;
this.sobrenome = sobrenome;
this.idade = idade

this.nomeCompleto = function () {
    return "Seu nome é " + this.nome + " " + this.sobrenome + ". Sua idade é " +this.idade + ".";
    }
}

var testePessoa = new Pessoa("Davi", "Monteiro", 29)

console.log(testePessoa.nomeCompleto());

