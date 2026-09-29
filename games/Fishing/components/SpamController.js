class SpamController extends Component {
    start() {
        this.goal = 500
        this.clicks = 0
        this.currentTime = 0
        this.spacePressed = false
        this.timeSinceText = 0

        this.bar = instantiate(new SpamBar(), new Vector2(500, 100))
        this.line = instantiate(new SpamLine(), new Vector2(500, 100))
        this.countdown = instantiate(new Countdown(), new Vector2(520, 150))
    }

    update() {
        if (!this.countdown) {
            return
        }

        this.currentTime += Time.deltaTime
        this.timeSinceText += Time.deltaTime

        let secondsRemaining = Math.ceil(10 - this.currentTime)
        this.countdown.getComponent(Textlabel).text = secondsRemaining + " seconds"

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
            console.log("success")
            this.gameObject.destroy()
            this.line.destroy()
            this.bar.destroy()
            this.countdown.destroy()
            Globals.money += this.gameObject.fishObject.value
            this.gameObject.fishObject.destroy()
            this.gameObject.hookController.fishingState = true
            let success = instantiate(new WinText(), new Vector2(Math.random() * 250 + 550, Math.random() * 250 + 300))
            success.getComponent(Textlabel).text = success.phrase + " +$" + this.gameObject.fishObject.value
        } else if (this.currentTime > 10) {
            console.log("lost")
            this.gameObject.destroy()
            this.line.destroy()
            this.bar.destroy()
            this.countdown.destroy()
            this.gameObject.fishObject.getComponent(FishController).caught = false
            this.gameObject.hookController.fishingState = true
            let failure = instantiate(new LoseText(), new Vector2(Math.random() * 250 + 550, Math.random() * 250 + 300))
        }

        if (this.line) {
            this.line.getComponent(Polygon).transform.position.y = -(this.clicks)
        }
    }
}