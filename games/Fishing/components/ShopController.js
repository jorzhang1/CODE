class ShopController extends Component {
    start() {
        this.opening = false
    }

    update() {
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

        if (Input.keysDownThisFrame.includes("Key1") && this.opening == false) {
            
        }
    }
}