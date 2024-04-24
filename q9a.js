let salario = 5000; 
let contador = 1; 

console.log("Salário inicial:", salario);

while (salario < 10000) {
    salario += salario * 0.3;;

    console.log("Salários parciais", contador++, ":", salario.toFixed(2));
}

console.log("O salário atingiu ou ultrapassou 10.000.");