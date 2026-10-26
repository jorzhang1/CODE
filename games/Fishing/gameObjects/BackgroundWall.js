class BackgroundWall extends GameObject {
    constructor() {
        super("BackGroundWall", [], "background")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(225, 224, 223)",
            points: [
                new Vector2(0, 0),
                new Vector2(600, 0),
                new Vector2(600, 600),
                new Vector2(0, 600),
            ]
        })
    }
}