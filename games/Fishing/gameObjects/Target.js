class Target extends GameObject {
    constructor() {
        super("Target")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(57, 193, 57)",
            points: [
                new Vector2(100, 0),
                new Vector2(100, 200),
                new Vector2(200, 200),
                new Vector2(200, 0),
            ]
        })
    }
}