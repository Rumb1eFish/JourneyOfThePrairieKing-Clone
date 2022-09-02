const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var gunX = c.width / 2 - 20
var gunY = c.height / 2 - 20

function mousePosX(event) {
    var mouseX = event.clientX
    return mouseX
}

function mousePosY(event) {
    var mouseY = event.clientY
    return mouseY
}

addEventListener("mousemove", function(e){
    mousePosX(e)
    mousePosY(e)
})