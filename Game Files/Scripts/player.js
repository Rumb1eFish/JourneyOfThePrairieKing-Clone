window.onload = function() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    var x = canvas.width / 2 - 20
    var y = canvas.height / 2 - 20
    var speed = 2
    var vxr = 0
    var vxl = 0
    var vyu = 0
    var vyd = 0

    function draw() {
        x += vxr
        x += vxl
        y += vyu
        y += vyd
        
        if (x < 0) {
            x = 0
        }
        else if (x > canvas.width - 50) {
            x = canvas.width - 50
        }

        if (y < 0) {
            y = 0
        }
        else if (y > canvas.height - 50) {
            y = canvas.height - 50
        }
        
        ctx.beginPath()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var sprite = new Image()
        sprite.src = "./Images/evil-turtle-mob.png"
        ctx.drawImage(sprite, x, y, 50, 50)
        
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
