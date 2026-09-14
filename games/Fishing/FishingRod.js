class FishingRod extends GameObject {
    constructor() {
        super()
        this.addComponent(new FishingRodController())
        this.addComponent(new Polygon(), {
            fillStyle: "red", points: [
                new Vector2(0, 30),
                new Vector2(5, 30),
                new Vector2(50, -30),
                new Vector2(45, -35),
                new Vector2(0, 25)
            ]
        })
    }
}