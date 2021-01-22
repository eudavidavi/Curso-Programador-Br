//Lista: Nome do aluno - nota 1 - nota 2 - media - Aprovado

var nomes = ["João", "Maria", "Davi"];
var nota1 = [7, 10, 6];
var nota2 = [3, 3, 8];

function media(n1, n2){
    return (n1 + n2) / 2
}

function aprova(media){
   return resultado = media >= 7 ? "Aprovado" : "Reprovado"
   }

//opção: criar uma variavel dentro do for para "nota1[i]" e "nota2[i]"
for (var i in nomes){

    var m = media(nota1[i], nota2[i])

    console.log(nomes[i] + " - " + nota1[i] + " - " + nota2[i] + " - " + m + " - " + aprova(m))
}