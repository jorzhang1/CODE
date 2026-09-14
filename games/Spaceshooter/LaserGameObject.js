class LaserGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {
            fillStyle: "red", points: [
                new Vector2(0, -20),
                new Vector2(10, 10),
                new Vector2(-10, 20)
            ]
        })
    }
}