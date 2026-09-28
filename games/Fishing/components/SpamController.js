class SpamController extends Component {
    start() {
        this.result = false
        this.goal = 500
        this.clicks = 0
        this.currentTime = 0
        this.spacePressed = false
        this.timeSinceText = 0

        instantiate(new SpamBar(), new Vector2(500, 100))
        instantiate(new SpamLine(), new Vector2(500, 100))
        this.line = GameObject.find("SpamLine")
        this.bar = GameObject.find("SpamBar")
    }

    update() {
        this.currentTime += Time.deltaTime
        this.timeSinceText += Time.deltaTime

        if (this.timeSinceText > 0.3) {
            this.timeSinceText = 0
            instantiate(new SpamText(), new Vector2(Math.random() * 200 + 600, Math.random() * 400 + 100))
        }

        if (this.clicks > 0)
            this.clicks -= 50 * Time.deltaTime

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
            Globals.money++

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