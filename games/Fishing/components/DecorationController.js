class DecorationController extends Component {
    start() {
        this.timeSinceLastBubble = 0
    }

    update() {
        this.timeSinceLastBubble += Time.deltaTime

        if (this.timeSinceLastBubble > 0.5) {
            this.timeSinceLastBubble = 0
            instantiate(new Bubble(), new Vector2(Math.random() * 1500, 1000))
        }
    }
}