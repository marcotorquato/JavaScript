function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'foto-manha-300.jpg'
        document.body.style.background = '#ffbd42'
        msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
    }
    else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'foto-tarde-300.jpg'
        document.body.style.background = '#c07248'
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
    }
    else {
        //BOA NOITE!
        img.src = 'foto-noite-300.jpg'
        document.body.style.background = '#773b77'
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
    }
}

