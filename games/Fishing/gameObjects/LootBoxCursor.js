class LootBoxCursor extends GameObject {
    constructor() {
        super("LootBoxCursor", [], "UI")
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(102, 102, 102, 0.3)",
            points: [
                new Vector2(0, 0),
                new Vector2(0, 400),
                new Vector2(5, 400),
                new Vector2(5, 0),
            ]
        })
    }
}