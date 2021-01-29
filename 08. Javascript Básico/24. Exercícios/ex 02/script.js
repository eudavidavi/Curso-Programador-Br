//2. Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function ordemCrescente ([a, b, c]){
    //encontrando o MAIOR
     b>c ? maior = b: maior = c;
     a>b && a>c ? maior = a: menor = a;
   
   //encontrando o MENOR
     b<c ? menor = b: menor = c;
     a<b && a<c ? menor = a: null;
   
   //encontrando o DO MEIO
     (a<b && a>c) || (a<c && a>b)  ? doMeio = a : null;
     (b<a && b>c) || (b<c && b>a)  ? doMeio = b : doMeio = c;
   
     console.log(maior,doMeio,menor);
   
   }
   
   console.log(ordemCrescente([70,52,30]));*/
   //--------------------------------------------------

/*Gabarito
function ordenarLista(lista){
    var listaOrdenada = lista.sort((a,b)=>a-b)
    for (let num of listaOrdenada) {
        console.log(num)
    }
}
​
​ordenarLista([9,25,3,20,18])
*/