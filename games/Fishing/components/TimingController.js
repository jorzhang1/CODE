class TimingController extends Component {
    start() {
        this.spacePressed = false
        this.roundsLeft = 3
        this.bar = instantiate(new HorizontalBar(), new Vector2(-200, -100))
        this.target = instantiate(new Target(), new Vector2(Math.random() * 500 + -200, -100))
        this.countdown = instantiate(new Countdown(), new Vector2(0, -125))
        this.cursor = instantiate(new TimingCursor(), new Vector2(-200, -100))
        this.timingText = instantiate(new TimingText(), new Vector2(-200, -125))
        this.timeRemaining = 10
    }

    update() {
        if (!this.countdown) {
            return
        }

        this.timeRemaining -= Time.deltaTime

        let secondsRemaining = Math.ceil(this.timeRemaining)
        this.countdown.getComponent(Textlabel).text = secondsRemaining + " seconds"

        if (Input.keysDown.includes("Space") && this.spacePressed == false) {
            this.spacePressed = true
            let targetPosition = this.target.transform.position
            let cursorPosition = this.cursor.transform.position
            let distance = targetPosition.minus(cursorPosition).magnitude

            if (distance > 100) {
                this.target.transform.position = new Vector2(Math.random() * 500 + -200, -100)
                this.timeRemaining -= 1
            } else if (distance < 100) {
                this.target.transform.position = new Vector2(Math.random() * 500 + -200, -100)
                this.roundsLeft--
                this.timingText.getComponent(Textlabel).text = this.roundsLeft + " rounds left"
            }
        }
        if (!Input.keysDown.includes("Space")) {
            this.spacePressed = false
        }

        if (this.roundsLeft == 0) {
            console.log("success")
            this.gameObject.destroy()
            this.bar.destroy()
            this.target.destroy()
            this.countdown.destroy()
            this.cursor.destroy()
            this.timingText.destroy()
            Globals.money += this.gameObject.fishObject.value
            this.gameObject.fishObject.destroy()
            this.gameObject.hookController.fishingState = true
            let success = instantiate(new WinText(), new Vector2(Math.random() * 400 + -200, Math.random() * 200 + -100))
            success.getComponent(Textlabel).text = success.phrase + " +$" + this.gameObject.fishObject.value
        } else if (this.timeRemaining <= 0) {
            console.log("lost")
            this.gameObject.destroy()
            this.bar.destroy()
            this.target.destroy()
            this.timingText.destroy()
            this.countdown.destroy()
            this.cursor.destroy()
            this.gameObject.fishObject.getComponent(FishController).caught = false
            this.gameObject.hookController.fishingState = true
            let failure = instantiate(new LoseText(), new Vector2(Math.random() * -400 + 200, Math.random() * 200 + -100))
        }
    }
}