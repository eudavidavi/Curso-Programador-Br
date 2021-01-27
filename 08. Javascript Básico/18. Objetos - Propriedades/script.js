// Array [] || Objeto {}
var objeto = {}

//Objeto: {chave:"valor"}
var objeto = {nome:"Bola", forma:"esfera", donos: ["João", "Maria", "Davi"]}

//Elemento > Variável || Objeto > Propriedade

//Acessar as Propriedades do Objeto 1 > objeto.propriedade
console.log(objeto.nome);

console.log(objeto.donos[2]);
//Acessar as Propriedades do Objeto 2 > objeto["propriedade"]
console.log(objeto["forma"]);

//Adicionar propriedades
objeto.fura = false;
objeto["tamanho"] = 20;
console.log(objeto);

//Adicionar uma variável dentro do Objeto
var teste = "umTeste";
objeto[teste] = "oTeste";

console.log(objeto);

//Adicionar objeto vazio em uma variável

var novoObjeto = new Object();
console.log(novoObjeto);
