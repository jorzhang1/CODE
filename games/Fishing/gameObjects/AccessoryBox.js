class AccessoryBox extends GameObject {
    constructor() {
        super("AccessoryBox", [], "background")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(182, 255, 167)",
            points: [
                new Vector2(0, 0),
                new Vector2(250, 0),
                new Vector2(250, 250),
                new Vector2(0, 250),
            ]
        })
    }
}