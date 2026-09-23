class HookController extends Component {
    start() {

    }

    update() {
        if (this.transform.position.y < 275) {
            this.transform.position.y += 5
        }

        if (Input.keysDown.includes("ArrowUp") && this.transform.position.y > 0)
            this.transform.position.y -= 5
        if (Input.keysDown.includes("ArrowDown") && this.transform.position.y < 625)
            this.transform.position.y += 5
        if (Input.keysDown.includes("ArrowRight") && this.transform.position.x < 1450)
            this.transform.position.x += 5
        if (Input.keysDown.includes("ArrowLeft") && this.transform.position.x > 0)
            this.transform.position.x -= 5

        let myPosition = this.transform.position
        let fishObject = GameObject.find("Fish")

        if (fishObject) {
            let fishPosition = fishObject.transform.position
            let distance = myPosition.minus(fishPosition).magnitude
            if (distance < 100) {
                instantiate(new Spam(), new Vector2(500, 100))
            }
        }
    }
}