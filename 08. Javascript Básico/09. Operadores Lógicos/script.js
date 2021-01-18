/*
&&, ||, ~
*/

var idade = 18
var menos18 = idade < 18
var mais16 = idade > 16

console.log("Maior que 18 ", menos18);
console.log("Menor que 16 ", mais16);

console.log("Entre 16 e 18", mais16 && menos18);
