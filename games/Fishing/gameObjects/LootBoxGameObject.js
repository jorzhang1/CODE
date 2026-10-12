class LootBoxGameObject extends GameObject {
    constructor() {
        super("LootBoxGameObject", [], "UI")
        this.addComponent(new LootBoxController())
    }
}