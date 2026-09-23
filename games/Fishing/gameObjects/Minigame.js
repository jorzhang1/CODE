class Minigame extends GameObject {
    constructor() {
        super()

        this.addComponent(new Polygon(), {
            fillStyle: "rgba(138, 137, 137, 0.84)",
            points: [
                new Vector2(0, 0),
                new Vector2(500, 0),
                new Vector2(500, 500),
                new Vector2(0, 500),
            ]
        })
    }
}