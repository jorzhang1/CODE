class Wall extends GameObject {
    constructor() {
        super("Wall", [], "UI")
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(0, 0, 0, 1)",
            points: [
                new Vector2(0, 0),
                new Vector2(200, 0),
                new Vector2(200, 400),
                new Vector2(0, 400),
            ]
        })
    }
}