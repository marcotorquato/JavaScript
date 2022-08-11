function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Vai limpar o campo antes de mostrar a proxima tabuada.
        while(c <= 10) {
            let item = document.createElement('option') //criando  um elemento
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //depois de ter criado o elemento, esta linha adiciona o elemento.
            c++
        }
    }
    
}