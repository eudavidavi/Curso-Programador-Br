//Var:
//Const (ES6): Constante > uma vez atribuído, não pode ser REATRIBUIDO.
const constante = [4];
console.log(constante);

constante.push(5);
console.log(constante);

//Let (ES6): diferença pro "var" é de escopo. Let e Const tem escopo LOCAL.
var variavel = "var"
let lete = "let"

console.log(variavel);
console.log(lete);
console.log(constante);

{console.log(variavel);
    console.log(lete);
    console.log(constante);
  
}