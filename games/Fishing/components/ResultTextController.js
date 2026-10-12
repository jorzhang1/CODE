class ResultTextController extends Component {
    start() {
        this.timeSinceInstantiation = 0
        this.duration = 3
        this.transform.scale = new Vector2(0.5, 0.5)
        this.text = this.gameObject.getComponent(Textlabel)
        this.opacity = 1
    }

    update() {
        this.timeSinceInstantiation += Time.deltaTime

        if (this.timeSinceInstantiation < 0.25) {
            this.transform.scale.x += 0.75 * Time.deltaTime
            this.transform.scale.y += 0.75 * Time.deltaTime
        } else if (this.timeSinceInstantiation < this.duration) {
            this.transform.position.y -= 15 * Time.deltaTime
            this.opacity -= 0.5 * Time.deltaTime
            this.text.fillStyle = `rgba(${this.gameObject.textColor}, ${this.opacity})`
        }
        if (this.timeSinceInstantiation >= this.duration) {
            this.gameObject.destroy()
        }
    }
}