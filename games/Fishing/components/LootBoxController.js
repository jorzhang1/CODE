class LootBoxController extends Component {
    start() {
        this.JPressed = false
        this.isSpinning = false
        this.winningItem = LootCatalog.getRandomItem()
        this.windex = 40 // winning item index
        this.cards = []
        this.cardCount = 50
        this.cardSpacing = 210
        this.reelSpeed = 5000
        this.fadeDistance = 450
        this.isFinished = false

        this.panel = instantiate(new Panel, new Vector2(500, 200))
        this.reel = instantiate(new LootReel(), new Vector2(400, 275))
        for (let i = 0; i < this.cardCount; i++) {
            let loot
            if (i == this.windex) {
                loot = this.winningItem
            } else {
                loot = LootCatalog.getRandomItem()
            }
            let card = instantiate(new LootBoxCard(loot), new Vector2(i * this.cardSpacing, 0))
            card.transform.setParent(this.reel.transform)
            this.cards.push(card)
        }

        this.leftWall = instantiate(new Wall, new Vector2(300, 200))
        this.rightWall = instantiate(new Wall, new Vector2(1200, 200))
        this.cursor = instantiate(new LootBoxCursor, new Vector2(825, 200))
        this.text = instantiate(new LootBoxText, new Vector2(500, 150))
        this.winPosition = this.cursor.transform.position.x - (this.windex * this.cardSpacing + 100)

        this.panel.transform.setParent(this.gameObject.transform)
        this.leftWall.transform.setParent(this.gameObject.transform)
        this.rightWall.transform.setParent(this.gameObject.transform)
        this.text.transform.setParent(this.gameObject.transform)
        this.cursor.transform.setParent(this.gameObject.transform)
        this.reel.transform.setParent(this.gameObject.transform)


    }

    update() {
        if (Input.keysDown.includes("KeyJ") && this.JPressed == false && this.isFinished == false) {
            this.JPressed = true
            this.isSpinning = true
        }
        if (!Input.keysDown.includes("KeyJ")) {
            this.JPressed = false
        }
        if (this.isSpinning) {
            this.reel.transform.position.x -= this.reelSpeed * Time.deltaTime
            if (this.reelSpeed > 100) { this.reelSpeed -= 1500 * Time.deltaTime }

            if (this.reel.transform.position.x <= this.winPosition) {
                this.isFinished = true
                this.reel.transform.position.x = this.winPosition
                this.isSpinning = false
                console.log("Press esc to exit")
                this.text.getComponent(Textlabel).text = "Press esc to exit"

                if (!Globals.lootObtained.includes(this.winningItem.id)) {
                    Globals.lootObtained.push(this.winningItem.id)
                    console.log("Unlocked " + this.winningItem.name)

                } else {
                    
                    console.log(this.winningItem.name + " already unlocked")
                }
            }
        }
        if (this.isFinished) {
            if (Input.keysDown.includes("Escape")) {
                for (const card of this.cards) {
                    card.destroy()
                }
                this.panel.destroy()
                this.leftWall.destroy()
                this.rightWall.destroy()
                this.text.destroy()
                this.cursor.destroy()
                this.reel.destroy()
                this.gameObject.destroy()
            }
        }
        for (const card of this.cards) {
            let cardPosition = this.reel.transform.position.x + card.transform.position.x + 100
            let distance = Math.abs(cardPosition - this.cursor.transform.position.x)

            card.opacity = Math.max(0, 1 - distance / this.fadeDistance)
        }
    }
}
