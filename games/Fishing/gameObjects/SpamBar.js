class SpamBar extends GameObject {
    constructor() {
        super("SpamBar", [], "minigame")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(161, 162, 161)",
            points: [
                new Vector2(100, 0),
                new Vector2(100, 500),
                new Vector2(400, 500),
                new Vector2(400, 0),
            ]
        })
    }
}