class ResultTextController extends Component {
    timeSinceInstantiation = 0
    duration = 2

    update() {
        if (!this.startPosition) {
            this.startPosition = this.transform.position.clone()
            this.label = this.gameObject.getComponent(Textlabel)

            let colorValues = this.label.fillStyle.match(/\d+/g)
            this.color = colorValues
                ? colorValues.slice(0, 3).join(", ")
                : "255, 255, 255"

            this.transform.scale = new Vector2(0.25, 0.25)
        }

        this.timeSinceInstantiation += Time.deltaTime

        let scale = 1

        if (this.timeSinceInstantiation < 0.15) {
            let progress = this.timeSinceInstantiation / 0.15
            scale = 0.25 + 0.95 * progress
        } else if (this.timeSinceInstantiation < 0.35) {
            let progress = (this.timeSinceInstantiation - 0.15) / 0.2
            scale = 1.2 - 0.2 * progress
        }

        this.transform.scale = new Vector2(scale, scale)

        this.transform.position.y =
            this.startPosition.y - this.timeSinceInstantiation * 25

        let opacity = 1

        if (this.timeSinceInstantiation > 1.4) {
            opacity = (this.duration - this.timeSinceInstantiation) / 0.6
        }

        this.label.fillStyle = `rgba(${this.color}, ${Math.max(0, opacity)})`

        if (this.timeSinceInstantiation >= this.duration) {
            this.gameObject.destroy()
        }
    }
}