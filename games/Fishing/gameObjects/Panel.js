class Panel extends GameObject {
    constructor() {
        super("Panel", [], "UI")
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(255, 189, 135, 1)",
            points: [
                new Vector2(0, 0),
                new Vector2(700, 0),
                new Vector2(700, 400),
                new Vector2(0, 400),
            ]
        })
    }
}