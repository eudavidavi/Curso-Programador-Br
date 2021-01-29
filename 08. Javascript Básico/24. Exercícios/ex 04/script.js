//4. Escreva uma função que receba um Array com 5 números e retorne a média deles
function mediaDosCinco ([a, b, c, d, e]){
  return (a+b+c+d+e)/5
}

console.log(mediaDosCinco([1,2,3,4,5]))
//--------------------------------------------------

/*Gabarito
function media(lista){
    var total = 0;
    for(let num of lista){
        total +=num
    }
    return total / lista.length
}
*/