function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('div#txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        window.alert('Tudo OK')

    }
} 