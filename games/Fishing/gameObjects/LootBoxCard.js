class LootBoxCard extends GameObject {
    constructor(lootItem) {
        super("LootBoxCard", [], "UI")
        this.lootItem = lootItem
        this.addComponent(new Polygon(), {
            fillStyle: lootItem.color,
            points: [
                new Vector2(0, 0),
                new Vector2(200, 0),
                new Vector2(200, 250),
                new Vector2(0, 250)
            ]
        })
        this.addComponent(new Textlabel(), {
            text: lootItem.name,
            fillStyle: "black",
            font: "20px Fredoka",
            offset: new Vector2(15, 130)
        })
        this.addComponent(new CardController())
    }
}