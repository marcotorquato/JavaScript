let = a = []
function adicionar() {
    let num = window.document.getElementById('txtn')
    let analise = window.document.getElementById('anl')
    if (num.value.length == '') {
        window.alert('Preecha o campo para adicionar valores!')
    }
    else if (num.value > 100 || num.value == 0) {
        window.alert('Número inválido!')
    }
    else {
        let n = Number(num.value)
        
        if (n >= 1 && n <= 100) {
           
            let pos = a.indexOf(n)
            if (pos == -1 ) {
                a.push(n)
                let i = document.createElement('option')
                i.text = `Número ${n} adicionado.`
                i.value = `${analise}`
                analise.appendChild(i)
                res.innerHTML = ''
                num.value = ''
                n.focus() // vai adicionar o número e o cursor voltará a piscar.

            }
            else {
                window.alert('Valor já adicionado!')
            }

        }
    }
}

function finalizar() {
    let soma = 0
    for (let v = 0; v < a.length; v++) {
        soma += a[v]
    }
    let media = 0 
    media = soma / a.length
    window.document.getElementById('res')
    if (a.length != '') {
        res.innerHTML = `Ao todo temos ${a.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, a)}<br>`
        res.innerHTML+= `O menor valor informado foi ${Math.min.apply(null, a)}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A media dos números digitados é ${media}`
        
    }
    else {
        res.innerHTML = ''
        window.alert('Adicione números para finalizar!')
    }
}