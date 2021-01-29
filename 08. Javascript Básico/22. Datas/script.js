var data = new Date;
var data2 = new Date(2020, 1, 20, 11, 20);

console.log(data);
console.log(data2);

//Métodos para se pegar uma data: getFullYear, getMinutes,...

console.log(data2.getUTCFullYear());

//plus: Pegar o dia da semana por índice de array
var dias = ["dom", "seg", "ter", "qua", "qui", "sex","sab"];

console.log(data.getDay());
console.log(dias[data.getDay()]);