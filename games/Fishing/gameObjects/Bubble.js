class Bubble extends GameObject {
    constructor() {
        super("Bubble", [], "background")
        this.addComponent(new BubbleController())
        this.speed = Math.random() * 150 + 50
        this.size = Math.random() * 2 + 1
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(0, 187, 255, 0.45)",
            points: [
                new Vector2(0, -10),
                new Vector2(6, -8),
                new Vector2(9, -3),
                new Vector2(10, 3),
                new Vector2(6, 8),
                new Vector2(1, 10),
                new Vector2(-5, 8),
                new Vector2(-9, 4),
                new Vector2(-10, -2),
                new Vector2(-6, -8),
                new Vector2(0, -10)
            ]
        })
        this.transform.scale = new Vector2(this.size, this.size)
    }
}