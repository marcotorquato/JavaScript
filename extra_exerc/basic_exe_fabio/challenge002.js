/*Escreva uma função que recebe dois
parâmetros(text,flag).
Se a flag for igual a"start",deve retornar
primeiros caracteres do parâmetro
Se a flag for igual a"end",deve retornar
últimos caracteres do parâmetro text
Se o parâmetro text tiver menos de
caracteres,apenas retornar o text. */

function myFunction(text, flag = "start"){
    if (text.length < 3 ){
    return text
    }
    if (flag === "start") {
        
        return text.slice (0, 3)
    }
    return text.slice (text.length - 3)

    }
    console.log(myFunction("abcdefg", "start")); // abc
    console.log(myFunction("abcdefg" , "end")); // efg
    console.log(myFunction("ab" , "end" )); // ab
    console.log(myFunction("abcdefg")); // abc