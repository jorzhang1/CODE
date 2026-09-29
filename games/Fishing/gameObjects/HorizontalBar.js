class HorizontalBar extends GameObject {
    constructor() {
        super("HorizontalBar")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(255, 228, 52)",
            points: [
                new Vector2(100, 0),
                new Vector2(100, 200),
                new Vector2(700, 200),
                new Vector2(700, 0),
            ]
        })
    }
}