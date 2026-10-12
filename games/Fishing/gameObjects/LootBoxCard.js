class LootBoxCard extends GameObject {
    constructor() {
        super("LootBoxCard", [], "UI")
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(192, 244, 49, 0.96)",
            points: [
                new Vector2(0, 0),
                new Vector2(200, 0),
                new Vector2(200, 250),
                new Vector2(0, 250),
            ]
        })
        this.addComponent(new LootBoxCardController())
    }
}