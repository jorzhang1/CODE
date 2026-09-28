class SpamTextController extends Component {
    start() {
        this.timeSinceInstantiation = 0
        this.gameObject.transform.scale = new Vector2(2, 2)
    }

    update() {
        this.timeSinceInstantiation += Time.deltaTime

        if (this.timeSinceInstantiation > 1) {
            this.gameObject.destroy()
        }
    }
}