function change() {
    var random =Math.ceil(Math.random()*6)
    document.getElementById("score").innerHTML = `${random} 🎈`
    var img = document.getElementById("img")
    img.src = `img/${random}.png`
}