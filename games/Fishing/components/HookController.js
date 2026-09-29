class HookController extends Component {
    start() {
        this.fishingState = true
    }

    update() {
        if (this.transform.position.y < 275) {
            this.transform.position.y += 300 * Time.deltaTime
        }
        if (this.fishingState == true) {
            if (Input.keysDown.includes("ArrowUp") && this.transform.position.y > 0)
                this.transform.position.y -= 300 * Time.deltaTime
            if (Input.keysDown.includes("ArrowDown") && this.transform.position.y < 625)
                this.transform.position.y += 300 * Time.deltaTime
            if (Input.keysDown.includes("ArrowRight") && this.transform.position.x < 1450)
                this.transform.position.x += 300 * Time.deltaTime
            if (Input.keysDown.includes("ArrowLeft") && this.transform.position.x > 0)
                this.transform.position.x -= 300 * Time.deltaTime
        }

        let myPosition = this.transform.position
        let fishObjects = GameObject.findGameObjectsWithTag("Fish")

        for (const fishObject of fishObjects) {
            let fishPosition = fishObject.transform.position
            let distance = myPosition.minus(fishPosition).magnitude
            if (distance < 50) {
                if (this.fishingState == true) {
                    instantiate(new HookText(), this.transform.position)
                }

                if (Input.keysDown.includes("KeyT") && this.fishingState == true) {
                    this.fishingState = false
                    let minigames = [Spam, Timing]

                    let randomIndex = Math.floor(Math.random() * minigames.length)
                    let MinigameType = minigames[randomIndex]

                    let minigame = instantiate(new MinigameType(), new Vector2(500, 100))
                    minigame.fishObject = fishObject
                    minigame.hookController = this

                    fishObject.getComponent(FishController).caught = true
                }
            }
        }
    }
}