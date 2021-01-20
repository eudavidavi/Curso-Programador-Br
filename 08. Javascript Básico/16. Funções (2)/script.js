// FUNÇAO: Bloco de código que executa algo, e tem um apelido

//Recebe argumentos (variáveis)
function media(n1, n2){
    var media = (n1 + n2) / 2
    console.log(media)
   }

//Executar a função (imprimir)
media(4, 5);

//Usar Return para gravar um resultado
function media(n1, n2){
    var media = (n1 + n2) / 2
   return media
   }

   var resultado = media(4,5);
   

   console.log("Resultado do return " + resultado);