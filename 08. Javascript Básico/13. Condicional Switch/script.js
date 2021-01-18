//Cálcular a média do aluno e imprimir sua situação: < 5, entre 5 e 7, > 7, (extra: = 10)

var nota1 = 9.2
var nota2 = 7.0

// Método usando else if
var media = (nota1 + nota2) / 2

if (media<5) console.log("Você está reprovado");

else if(media > 5 && media < 7) console.log("Você está de recuperação!");

else console.log("Parabens, você está aprovado");

//Método usando switch
switch(media){
    case media == 10:
        console.log("Você é um aluno Nota 10!");
        break;
    
    case media<5 :
        console.log("Você está reprovado.");
        break;

    case media > 5 && media < 7:
        console.log("Você está de Recuperação.");
        break;
        
    case  media > 7:
        console.log("Parabens, você está aprovado");
        break;

    default:
        console.log("Ocorreu um erro")
        break;

}

console.log(media);