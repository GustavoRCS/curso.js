function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 19
    img.setAttribute('id', 'foto')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia !
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#fea300'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde !
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#9d6633'
    } else {
        // Boa Noite !
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor ='#213d48'
    }
}