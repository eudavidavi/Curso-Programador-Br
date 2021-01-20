//Função é também uma variável

//Para executar a função, precisamos passar os parâmetros, mesmo que vazio

function bomDia(){
    return "Bom dia, mundo.";
}

var saudacao = bomDia;

saudacao = bomDia();

//Função anônima (olhar depois)