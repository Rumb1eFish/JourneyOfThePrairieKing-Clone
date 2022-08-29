window.onload = function() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    function bullet(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.vx = 5
        this.vy = 5

        this.update = function() {
            ctx.beginPath()
            ctx.fillStyle = "grey"
            ctx.arc(this.x, this.y, 0, this.radius, 2 * Math.PI)
            ctx.fill()
        }

        this.newPos = function() {
            //add code
        }
    }
}