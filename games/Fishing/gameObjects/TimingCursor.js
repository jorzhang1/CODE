class TimingCursor extends GameObject {
    constructor() {
        super("TimingCursor")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(0, 0, 0)",
            points: [
                new Vector2(100, 0),
                new Vector2(100, 200),
                new Vector2(125, 200),
                new Vector2(125, 0),
            ]
        })
        this.addComponent(new TimingCursorController())
    }
}