class ShopController extends Component {
    start() {
        this.opening = false
        this.refreshEquipped()
    }

    refreshEquipped() {
        let shop = SceneManager.currentScene
        let boatColor = "rgb(139, 89, 51)"
        let rodColor = "rgba(114, 205, 134, 0.9)"

        for (const item of LootCatalog.items) {
            if (item.id == Globals.equippedBoatSkinId) {
                boatColor = item.color
            }
            if (item.id == Globals.equippedRodSkinId) {
                rodColor = item.color
            }
        }
        shop.boat.getComponent(Polygon).fillStyle = boatColor
        shop.rod.getComponent(Polygon).fillStyle = rodColor
    }
    
    getAvailableBoats() {
        let availableBoats = [null]
        for (const item of LootCatalog.items) {
            if (item.type == "boatSkin" && Globals.lootObtained.includes(item.id)) {
                availableBoats.push(item.id)
            }
        }
        return availableBoats
    }

    update() {
        let availableBoats = this.getAvailableBoats()

        if (Globals.crateCount > 0) {
            if (Input.keysDownThisFrame.includes("KeyO") && this.opening == false) {
                this.opening = true
                instantiate(new LootBoxGameObject())
                Globals.crateCount -= 1
                let crateCountText = GameObject.find("crateCount")
                crateCountText.getComponent(Textlabel).text = Globals.crateCount + " crates"
            }
        }

        if (Input.keysDownThisFrame.includes("KeyB") && this.opening == false) {
            if (Globals.money >= Globals.cratePrice) {
                Globals.money -= Globals.cratePrice
                Globals.crateCount += 1
                let crateCountText = GameObject.find("crateCount")
                crateCountText.getComponent(Textlabel).text = Globals.crateCount + " crates"
            } else {

            }
        }

        if (Input.keysDownThisFrame.includes("Digit1")) {
            let availableBoats = this.getAvailableBoats()
            let currentIndex = availableBoats.indexOf(Globals.equippedBoatSkinId)
            let nextIndex = (currentIndex + 1) % availableBoats.length
            Globals.equippedBoatSkinId = availableBoats[nextIndex]

            console.log("Equipped boat: " + Globals.equippedBoatSkinId)
            this.refreshEquipped()
        }

        if (Input.keysDownThisFrame.includes("Digit2")) {
            let availableBoats = this.getAvailableBoats()
            let currentIndex = availableBoats.indexOf(Globals.equippedBoatSkinId)
            let nextIndex = (currentIndex + 1) % availableBoats.length
            Globals.equippedBoatSkinId = availableBoats[nextIndex]

            console.log("Equipped boat: " + Globals.equippedBoatSkinId)
            this.refreshEquipped()
        }

        if (Input.keysDownThisFrame.includes("Digit3")) {
            let availableBoats = this.getAvailableBoats()
            let currentIndex = availableBoats.indexOf(Globals.equippedBoatSkinId)
            let nextIndex = (currentIndex + 1) % availableBoats.length
            Globals.equippedBoatSkinId = availableBoats[nextIndex]

            console.log("Equipped boat: " + Globals.equippedBoatSkinId)
            this.refreshEquipped()
        }

        if (Input.keysDownThisFrame.includes("Digit4")) {
            let availableBoats = this.getAvailableBoats()
            let currentIndex = availableBoats.indexOf(Globals.equippedBoatSkinId)
            let nextIndex = (currentIndex + 1) % availableBoats.length
            Globals.equippedBoatSkinId = availableBoats[nextIndex]

            console.log("Equipped boat: " + Globals.equippedBoatSkinId)
            this.refreshEquipped()
        }
    }
}