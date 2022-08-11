function verificar() {
    let inicio = window.document.getElementById('ini')
    let final = window.document.getElementById('fim')
    let pulo = window.document.getElementById('passo')
    let result = window.document.getElementById('result')
    
   if (inicio.value.length == 0 || final.value.length == 0 || pulo.value.length == 0) {
       result.innerHTML = `Impossível contar!`
       window.alert('[ERRO] Faltam dados!')
   }
   else {
       result.innerHTML = `Contando: <br>`
       let i = Number(inicio.value)
       var f = Number(fim.value)
       let p = Number(pulo.value)
       if (p <= 0) {
           window.alert('Passo inválido! Considerando PASSO 1')
           p = 1
       }
       if (i < f) {
           //Contagem crescente
            for(let c = i; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F449}`
       }
       } 
       else {
           //Contagem regressiva
           for (let c = i; c >= f; c -= p) {
               result.innerHTML += `${c} \u{1f449}`
           }
       }
       result.innerHTML += `\u{1f3c1}`
   }
}