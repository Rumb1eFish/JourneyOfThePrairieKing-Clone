
window.onload = function() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    var x = canvas.width / 2
    var y = canvas.height / 2
    var vx = 0
    var vy = 0

    //Draws Player
    function draw() {
        x += vx
        y += vy
        
        ctx.clearRect(0, 0, )
        ctx.fillRect(x, y, 50, 50)
        requestAnimationFrame(draw)
    }
    draw()

    addEventListener("keydown", function(e){
        console.log(e.code)
        if (e.code == "KeyW" || e.code == "ArrowUp") {vy = -5; vx = 0; console.log(vx)}
        else if (e.code == "KeyS" || e.code == "ArrowDown") {vy = 5; vx = 0; console.log(vx)}
        else if (e.code == "KeyA" || e.code == "ArrowLeft") {vx = -5; vy = 0; console.log(vy)}
        else if (e.code == "KeyD" || e.code == "ArrowRight") {vx = 5; vy = 0; console.log(vy)}
    })

}