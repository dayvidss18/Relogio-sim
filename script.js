function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#FFD89C'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#E2BF81'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#191970'
    }
}

