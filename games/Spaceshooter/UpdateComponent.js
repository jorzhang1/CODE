class UpdateComponent extends Component {

    start() {
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x += 25
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x -= 25
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y -= 25
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y += 25

        if (this.timeSinceLastLaser > 3) {
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}

