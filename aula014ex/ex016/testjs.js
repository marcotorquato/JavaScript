function check() {
    let start = document.getElementById('start')
    let end = document.getElementById ('end')
    let step = document.getElementById('step')
    let result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        result.innerHTML = 'Impossible to count'
        window.alert('ERROR, data missing')
    }
    else {
        result.innerHTML = 'COUNTING... <br>'
        let s = Number(start.value)
        let e = Number(end.value)
        let st= Number(step.value)
        if (st <= 0) {
            window.alert('INVALID!, considering step 1')
            st = 1
        }
        if (s < e) {
            // Count up
            for(let c = s; c <= e; c += st) {
                result.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            // Countdown
            for (let c = s; c >= e; c-= st)
                result.innerHTML += `${c} \u{1f449}`
        }
        result.innerHTML += `\u{1f3c1}`
    }
}
