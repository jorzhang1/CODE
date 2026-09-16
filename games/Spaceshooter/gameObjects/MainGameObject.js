class MainGameObject extends GameObject {
    constructor() {
        super("Spaceship")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {
            fillStyle: "blue", points: [
                new Vector2(0, -20),
                new Vector2(10, -30),
                new Vector2(10, 0),
                new Vector2(50, -40),
                new Vector2(0, -20),
                new Vector2(-10, -30),
                new Vector2(-10, 0),
                new Vector2(-50, -40)
            ]
        })
    }
}