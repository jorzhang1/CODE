class Textlabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"
    font = "10px Fredoka"
    offset = new Vector2(0, 0)

    draw(ctx) {
        let position = this.gameObject.transform.position

        ctx.save()

        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        ctx.fillText(this.text, this.offset.x, this.offset.y)
        ctx.restore()
    }
}