class FishingRodController extends Component {
    start() {
        this.timeSinceCast = 0
        this.hookdown = false
    }

    update() {
        if (this.hookdown == true) {
            this.timeSinceCast += Time.deltaTime
        }
        if (Input.keysDown.includes("Space") && (this.hookdown == false)) {
            instantiate(new FishingLine())
            instantiate(new Hook(), new Vector2(125, 100))            
            this.hookdown = true
            console.log("casted")
        }
        else if ((Input.keysDown.includes("KeyR") || this.timeSinceCast > 10) && (this.hookdown == true)) {
            GameObject.find("Hook").destroy()
            this.hookdown = false
            console.log("reeled")
            this.timeSinceCast = 0
        }
    }
}