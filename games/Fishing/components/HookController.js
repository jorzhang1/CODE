class HookController extends Component {
    start() {
    }

    update() {
        if (this.transform.position.y < 500) {
            this.transform.position.y += 5 
        }

        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x += 5
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x -= 5
    }
}