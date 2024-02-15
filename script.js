// var aluno = {nome: "Luís", nota1: 8, nota2: 9}

// function media(n1, n2) {
//     return (n1 + n2) / 2
// }

// console.log( "Olá " + aluno.nome + ", sua primeira nota é " + 
//                         aluno.nota1 + ", sua segunda nota é " + 
//                         aluno.nota2 + ", e sua média é " + 
//                         media(aluno.nota1, aluno.nota2));



// var nomes = ["Igor","Guilherme","Ig"];
// var notasA = [5, 7, 9];
// var notasB = [8, 8, 9];

// function media(n1, n2){
//     return (n1 + n2) / 2;
// }

// function passou(media){
//     if(media >= 7){
//         return "Aprovado";
//     }
//     else{
//         return "Reprovado";
//     }
// }

// for(index in nomes){

//     var nota1 = notasA[index];
//     var nota2 = notasB[index];

//     var m = media(nota1, nota2);

//     console.log(nomes[index] + " - " + nota1 + " - " +
//      nota2 + " - " + m + " - " + passou(m));
// }

// var d = new Date(0);

// console.log(d);

// var sala = {NomeSala: "A1", QAlunos: 4};
// var alunos = ["Shein", "Zed", "Kayn", "Akali"];
// var nota1Alunos = [10, 9, 8, 7];
// var nota2Alunos = [8, 7, 9, 5];

// function mediaAlunos(n1, n2){
//     return (n1 + n2) / 2;
// }

// var nAluno = parseInt(prompt("Escolha um número de 1 a 4 para escolher o aluno!"));

// var nE = nAluno - 1;

// console.log("O aluno escolhido foi " + alunos[nE] + ", as notas de " + alunos[nE] + " é " + nota1Alunos[nE] + 
//             " e " + nota2Alunos[nE] + ", e sua média é " + mediaAlunos(nota1Alunos[nE], nota2Alunos[nE]));

var sim = document.getElementById("sim");
var nao = document.getElementById("nao");

function simclick(){
    alert("HMM, LÁ ELE");
}

function naoclick(){
    alert("PARA DE MENTIR VIADO");
}