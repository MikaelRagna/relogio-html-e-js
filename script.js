function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
var min =  date.getMinutes()
var sec = date.getSeconds()
msg.innerHTML = `Agora são ${hora}h ${min}min ${sec}seg`
if (hora>= 0 && hora<12){
    //BOM DIA !!!
    img.src = "edit1.png"
    document.body.style.background = '#ffcd4b'
}else if(hora>=12 && hora<18){
    //BOA TARDE !!!
    img.src = "edit2.png"
    document.body.style.background = '#c5550f'
}else{
    //BOA NOITE !!!
    img.src ="edit3.png"
    document.body.style.background = "#00254e"
}

}