class DrawComponent extends Component {
    draw(ctx) {
        let position = this.gameObject.components[0].position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.lineTo(0, -20)
        ctx.lineTo(10, -30)
        ctx.lineTo(10, 0)
        ctx.lineTo(50, -40)
        ctx.lineTo(0, -20)
        ctx.lineTo(-10, -30)
        ctx.lineTo(-10, 0)
        ctx.lineTo(-50, -40)

        ctx.fillStyle = "orange"
        ctx.fill()
        ctx.restore()
    }
}