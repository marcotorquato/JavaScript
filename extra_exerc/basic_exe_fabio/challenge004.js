/*Escreva uma função que recebe um número
como parâmetro.
Se o número for par, retorna true e se for
ímpar,retorna false. */

function myFunction(num) {
        return num % 2 == 0
    }
    console.log(myFunction(8)); // true
    console.log(myFunction(-10)); // true
    console.log(myFunction(7)); // false
    console.log(myFunction(-41)); // false