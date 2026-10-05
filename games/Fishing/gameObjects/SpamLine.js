class SpamLine extends GameObject {
    constructor() {
        super("SpamLine", [], "minigame")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(213, 199, 71)",
            points: [
                new Vector2(100, 600),
                new Vector2(400, 600),
                new Vector2(400, 550),
                new Vector2(100, 550),
            ]
        })
    }
}