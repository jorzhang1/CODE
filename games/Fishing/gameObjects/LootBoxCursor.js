class LootBoxCursor extends GameObject {
    constructor() {
        super("LootBoxCursor", [], "UI")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(255, 0, 0)",
            points: [
                new Vector2(0, 0),
                new Vector2(0, 400),
                new Vector2(10, 400),
                new Vector2(10, 0),
            ]
        })
    }
}