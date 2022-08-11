function table () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById ('seltab')

    if (num.value.length == 0) {
        window.alert ('Please enter a number!')
    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= '' // Will clear the field before showing the next times table.
        while (c <=10) {
            let item = document.createElement('option') // Create element 
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)//after having created the element, this line adds the element.
            c++
        }
    }
}