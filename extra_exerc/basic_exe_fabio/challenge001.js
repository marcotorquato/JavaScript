/*Escreva uma função que recebe 6 parâmetros
(a,b,c,d,e,f).
Faça a soma de a com b.
O resultado da soma,subtraia o valor de c.
O resultado da subtração,muitiplique por de
faça divisão por e.
E para finalizar,faça o resultado elevado à
potência de f.*/

function resultado(a, b, c, d, e, f) {
   return (((a+b)- c)* d / e) ** f;

}

console.log(resultado(6, 5, 4, 3, 2, 1))