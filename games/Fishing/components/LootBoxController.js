class LootBoxController extends Component {
    start() {
        this.JPressed = false
        this.timeSinceCard = 0

        this.scroller = instantiate(new Scroller, new Vector2(500, 200))
        this.wall = instantiate(new Wall, new Vector2(300, 200))
        this.wall = instantiate(new Wall, new Vector2(1200, 200))
        this.text = instantiate(new LootBoxText, new Vector2(500, 150))
        this.cursor = instantiate(new LootBoxCursor, new Vector2(825, 200))
    }

    update() {
        this.timeSinceCard += Time.deltaTime

        if (Input.keysDown.includes("KeyJ") && (this.JPressed == false)) {
            this.JPressed = true
            console.log("Unlocked")
            if (this.timeSinceCard > 1) {
                this.timeSinceCard = 0
                instantiate(new LootBoxCard(), new Vector2(400, 275))
            }
        }
    }
}
