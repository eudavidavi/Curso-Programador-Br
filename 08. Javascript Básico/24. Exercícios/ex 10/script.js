/*10. Escreva um programa que imprima o seguinte padrão
*
* *
* * *
* * * *
* * * * *
*/


var asterisco = ""
for (i=1; i<=5; i++){
  asterisco += "*";
  console.log(asterisco);
}

/*Gabarito
function escada(altura){
    for(let i = 1; i <=altura;i++){
        let string = ""
        for(let j =1 ;j<= i; j++){
            string +="* "
        }
        console.log(string)
    }
}
// escada(25)
*/