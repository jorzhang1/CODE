class Water extends GameObject {
    constructor() {
        super("Water", [], "background")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(136, 217, 255)",
            points: [
                new Vector2(0, 0),
                new Vector2(0, 500),
                new Vector2(1500, 500),
                new Vector2(1500, 0),
            ]
        })
    }
}