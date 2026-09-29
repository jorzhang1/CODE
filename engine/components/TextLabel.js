class Textlabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px Impact"

    draw(ctx) {
        let position = this.gameObject.transform.position

        ctx.save()

        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        ctx.fillText(this.text, 0, 0)
        ctx.restore()
    }
}