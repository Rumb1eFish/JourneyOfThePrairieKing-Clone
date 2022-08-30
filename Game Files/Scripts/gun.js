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