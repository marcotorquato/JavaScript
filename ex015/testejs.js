function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert ('ERROR')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        res.innerHTML = `Idade calculada: ${age}`
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            genre = 'Man'
            if (age >=0 && age < 10) {
                //Criança
                img.setAttribute('src', 'menino-bebe-270.jpg')
            }
            else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem-270.jpg')
            }
            else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto-270.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', 'homem-idoso-270.jpg')
            }
        }
        else if (fsex[1].checked) {
            genre = 'Woman'
            if (age >=0 && age < 10) {
                //Criança
                img.setAttribute('src', 'menina-bebe.jpg')
            }
            else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem-270.jpg')
            }
            else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta-270.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa-270.jpg')
            }
        }
        res.style.textAlign = 'center'
            res.innerHTML = `We detected ${genre} with ${age} years old.`
    }

}
