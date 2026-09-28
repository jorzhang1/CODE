class HookTextController extends Component {
    start() {
        this.timeSinceInstantiation = 0
    }

    update() {
        this.timeSinceInstantiation += Time.deltaTime

        if (this.timeSinceInstantiation > 0.1) {
            this.gameObject.destroy()
        }
    }
}