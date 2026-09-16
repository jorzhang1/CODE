class FishingRod extends GameObject {
    constructor() {
        super("FishingRod")
        this.addComponent(new FishingRodController())
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(114, 205, 134, 0.9)",
            points: [
                new Vector2(0, 30),
                new Vector2(5, 30),
                new Vector2(50, -30),
                new Vector2(45, -35),
                new Vector2(0, 25)
            ]
        })
    }
}