// Variável tem FUNÇÃO.
// Objeto tem MÉTODO.

// .this > usado sempre no contexto de objeto. Faz referência ao objeto inserido. "ISSO"
function calcMedia () {
    return (this.notas[0] + this.notas[1])/2;
}

var alunos = {nome: "Davi", notas: [8.0, 9.0], media: calcMedia
}

console.log(alunos.media(alunos.notas[0], alunos.notas[1]));



//(?).this tira a necessidade de passar parâmetro na função