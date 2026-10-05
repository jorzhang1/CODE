class FishingRodController extends Component {
    start() {
        this.timeSinceCast = 0
        this.hookdown = false
    }

    update() {
        let hook = GameObject.find("Hook")
        if (hook) {
            this.hookController = hook.getComponent(HookController)
        }

        if (this.hookdown == true) {
            this.timeSinceCast += Time.deltaTime
        }
        if (Input.keysDown.includes("Space") && (this.hookdown == false)) {
            instantiate(new FishingLine())
            instantiate(new Hook(), new Vector2(-400, -250))
            this.hookdown = true
            console.log("casted")
        }
        else if ((Input.keysDown.includes("KeyR") == true || this.timeSinceCast > 10) && (this.hookdown == true) && this.hookController?.fishingState) {
            GameObject.find("Hook").destroy()
            this.hookdown = false
            console.log("reeled")
            this.timeSinceCast = 0
        }
    }
}