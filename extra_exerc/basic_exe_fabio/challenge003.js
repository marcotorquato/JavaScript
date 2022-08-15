/*Escreva uma função que recebe dois
parâmetros(fullname,flag).
Se a flag for igual a"firstname",deve retornar
apenas a primeira palavra da parâmetro
fullname.
Se a flag for igual a"lastname", deve retornar
todo o texto,exceto a primeira palavra da
parâmetro fullname.
Se o parâmetro flag for vazio ou fullname
conter apenas uma palavra,apenas retornar o
conteúdo de fullname. */

// Complete a função:
function myFunction(fullname, flag= ''){
    const parts = fullname.split(' ')
    if (flag.length = 0 || parts.length <= 1) {
        return fullname
    } 
    else if (flag === 'firstname') {
        return parts [0]
    }
    if (flag = 'lastname')
    return parts.slice (1).join('')

}

    console.log(myFunction("John Williams Smith", "firstname")); // John
    console.log(myFunction("John Williams Smith", "lastname")); // Williams Smith
    console.log(myFunction("John Williams Smith")) ; // John Williams Smith
    console.log(myFunction("John", "lastname")); // John


    /* OU SIMPLIFICANDO */

    function myFunction(fullname, flag = "") {
        const parts = fullname.split(" ")
        return flag.length = 0 || parts.length <= 1 ? fullname : flag === "firstname" ? parts[0] : parts.slice(1).join(" ")
        }
        console.log(myFunction("Marco Antonio Torquato" , "firstname")); // Marco
        console.log(myFunction("Marco Antonio Torquato", "lastname")); // Marco Torquato
        console.log(myFunction("Marco Antonio Torquato")); // Marco Antonio Torquato
        console.log(myFunction("John", "lastname")); // Marco