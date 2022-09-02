window.onload = function() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    var spriteX = canvas.width / 2 - 20
    var spriteY = canvas.height / 2 - 20
    var speed = 2
    var vxr = 0
    var vxl = 0
    var vyu = 0
    var vyd = 0

    function draw() {
        spriteX += vxr
        spriteX += vxl
        spriteY += vyu
        spriteY += vyd
        
        if (spriteX < 0) {
            spriteX = 0
        }
        else if (spriteX > canvas.width - 50) {
            spriteX = canvas.width - 50
        }

        if (spriteY < 0) {
            spriteY = 0
        }
        else if (spriteY > canvas.height - 50) {
            spriteY = canvas.height - 50
        }
        
        ctx.beginPath()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var sprite = new Image()
        sprite.src = "./Images/evil-turtle-mob.png"
        ctx.drawImage(sprite, spriteX, spriteY, 50, 50)
        
        requestAnimationFrame(draw)
    }
    draw()
    

    addEventListener("keydown", function(e){
        if (e.code == "KeyW" || e.code == "ArrowUp") {vyu = -speed; vx = 0}
        else if (e.code == "KeyS" || e.code == "ArrowDown") {vyd = speed; vx = 0}
        else if (e.code == "KeyA" || e.code == "ArrowLeft") {vxl = -speed; vy = 0}
        else if (e.code == "KeyD" || e.code == "ArrowRight") {vxr = speed; vy = 0}
    })

    addEventListener("keyup", function(e){
        if (e.code == "KeyW" || e.code == "ArrowUp") {vyu = 0; vx = 0}
        else if (e.code == "KeyS" || e.code == "ArrowDown") {vyd = 0; vx = 0}
        else if (e.code == "KeyA" || e.code == "ArrowLeft") {vxl = 0; vy = 0}
        else if (e.code == "KeyD" || e.code == "ArrowRight") {vxr = 0; vy = 0}
    })

}
