5.Escreva uma função que receba um número e imprima se ele é par ou ímpar 
function parOuImpar (a){
  a%2 == 0 ? console.log("par") : console.log("impar");
}
parOuImpar(4);
//--------------------------------------------------

/* Gabarito
function parOuImpar(num){
    if(num%2 == 0){
        console.log("par")
    }else{
        console.log("impar")
    }
}
 const maior = maiorNum([9,25,3,20,32,18])
 parOuImpar(maior)
*/