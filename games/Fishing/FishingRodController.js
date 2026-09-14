class FishingRodController extends Component {
    start() {
        this.hookdown = false
    }

    update() {
        if (Input.keysDown.includes("Space") & (this.hookdown == false)) {
            instantiate(new Hook(), new Vector2(125, 50))
            this.hookdown = true
            console.log("casted")
            
        }
    }
}