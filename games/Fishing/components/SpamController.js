class SpamController extends Component {
    start() {
        this.result = false
        this.goal = 500
        this.clicks = 0
        this.currentTime = 0
        this.spacePressed = false

        instantiate(new SpamBar(), new Vector2(500, 100))
        instantiate(new SpamLine(), new Vector2(500, 100))
        this.line = GameObject.find("SpamLine")
        this.bar = GameObject.find("SpamBar")
    }

    update() {
        console.log(this.clicks)
        this.currentTime += Time.deltaTime

        if (this.clicks > 0)
            this.clicks -= 100 * Time.deltaTime

        if (Input.keysDown.includes("Space") && this.spacePressed == false) {
            this.clicks += 20
            this.spacePressed = true
        }
        if (!Input.keysDown.includes("Space")) {
            this.spacePressed = false
        }

        if (this.clicks > this.goal) {
            this.result = true
            console.log("success")
            this.gameObject.destroy()
            this.line.destroy()
            this.bar.destroy()
        }
        else if (this.currentTime > 10) {
            console.log("lost")
            this.gameObject.destroy()
            this.line.destroy()
            this.bar.destroy()
        }

        if (this.line) {
            this.line.getComponent(Polygon).transform.position.y = -(this.clicks)
        }
    }
}