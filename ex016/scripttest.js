const a = []
    function addnumber () {
        const num = window.document.querySelector('#txtn')
            analyzer = window.document.querySelector('#anl')
            if (num.value.length == '') {
                window.alert('Fill in the field to add values!')
            }
            else if (num.value > 100 || num.value == 0) {
                window.alert('Invalid number!')
            }
            else {
                const n = Number(num.value)

                if (n >= 1 && n <= 100) {
                    const pos = a.indexOf(n)
                    if (pos == -1) {
                        a.push(n)
                        const i = document.createElement('option')
                        i.text = `Number ${n} added.`
                        i.value = `${analyzer}`
                        analyzer.appendChild(i)
                        res.innerHTML = ''
                        num.value = ''
                        n.focus() // goes to add the number and the cursor returns to blink.
                    }
                    else {
                        window.alert('Value already added!')
                    }
                }
            }    
    }  

    function finish () {
        let soma = 0
        for (let v = 0; v < a.length; v++) {
            soma += a[v]
        }
        let media = 0
        media = soma / a.length
        window.document.querySelector('#res')
        if (a.length != '') {
            res.innerHTML = `For all we have ${a.length} numbers registered. <br>`
            res.innerHTML += `The highest value entered was ${Math.max.apply(null, a)}<br>`
            res.innerHTML += `The lowest value entered was ${Math.min.apply(null, a)}<br>`
            res.innerHTML += `Summing all the values, we have ${soma}<br>`
            res.innerHTML += `The average of the values entered is ${media}`
        }
    }
            