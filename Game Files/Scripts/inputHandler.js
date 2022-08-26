
addEventListener("keydown", function(e){
    console.log(e.code)
    if (e.code == "KeyW" || e.code == "ArrowUp") {vy = -5; console.log(vx)}
    else if (e.code == "KeyS" || e.code == "ArrowDown") {vy = 5; console.log(vx)}
    else if (e.code == "KeyA" || e.code == "ArrowLeft") {vx = -5; console.log(vy)}
    else if (e.code == "KeyD" || e.code == "ArrowRight") {vx = 5; console.log(vy)}
})