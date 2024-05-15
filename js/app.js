function change() {
    var random =Math.ceil(Math.random()*6)
    var img = document.getElementById("img")
    img.src = `img/${random}.png`
}