//3. Escreva uma função que receba um Array com 5 números e retorne o maior deles 

//function maiorDosCinco ([a, b, c, d, e]){
  /*(a>b && a>c && a>d && a>e) ? oMaior = a : null;
  (b>c && b>d && b>e) ? oMaior = b : null;
  (c>d && c>e) ? oMaior = c : null;
  d>e ? oMaior = d : oMaior = e;*/
  //(e>a && e>b && e>c && e>d) ? oMaior = e : null;

 /* d>e ? oMaior = d : oMaior = e;
  (c>d && c>e) ? oMaior = c : null;
  (b>c && b>d && b>e) ? oMaior = b : null;
  (a>b && a>c && a>d && a>e) ? oMaior = a : null;

  return oMaior
}

console.log(maiorDosCinco([2,4,4,5,43]));*/
//--------------------------------------------------

/*Gabarito
function maiorNum(lista){
    var maior = lista[0]
    for (let num of lista) {
       maior = maiorEntreDois(num,maior)
    }
    return maior
}

​console.log(maiorNum([9,25,3,20,18]))
*/