class HorizontalBar extends GameObject {
    constructor() {
        super("HorizontalBar", [], "minigame")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(255, 228, 52)",
            points: [
                new Vector2(0, 0),
                new Vector2(0, 200),
                new Vector2(600, 200),
                new Vector2(600, 0),
            ]
        })
    }
}