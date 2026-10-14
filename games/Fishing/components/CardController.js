class CardController extends Component {
    start() {
        this.effect

        if (this.gameObject.lootItem.rarity == "uncommon") {
            this.effect = "glow"
        } else if (this.gameObject.lootItem.rarity == "rare") {
            this.effect = "glow"
        }
    }

    update() {
        if (this.effect == "glow") {
            
        }
    }
}