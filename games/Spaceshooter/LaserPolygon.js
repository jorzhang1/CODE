class LaserPolygon {
    draw(ctx) {
        let position = this.transform.position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, -10)
        ctx.lineTo(10, -20)
        ctx.lineTo(20, -20)
        ctx.lineTo(30, -10)
        ctx.lineTo(20, 0)
        ctx.lineTo(10, 0)
        ctx.lineTo(0, 0)

        ctx.fillStyle = "red"
        ctx.fill()
        ctx.restore()
    }
}