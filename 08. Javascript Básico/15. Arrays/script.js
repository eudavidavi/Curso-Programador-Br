//Array: RECEBE QUAISQUER TIPOS DE DADOS
//Forma de criar array vazio
var vetor = new Array();

//Preenchendo o vetor (pode criar já "preenchido")
vetor = ["Davi", "Julia", "Pedro", "Carmem"];

//Imprime a partir do índice zero
console.log(vetor[0]);

//Tamanho do Array
console.log(vetor.length);

//Imprimir o array completo
console.log(vetor);

//Imprimir os indices separados do array 
for (i = 0; i < vetor.length; i++){
    console.log(vetor[i])
};

//Forma resumida de fazer o for de cima

//in pega o índice
for (var i in vetor){
    console.log(i)
};

//of pega o elemento 
for (var i of vetor){
    console.log(i)
};