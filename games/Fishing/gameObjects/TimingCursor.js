class TimingCursor extends GameObject {
    constructor() {
        super("TimingCursor", [], "minigame")
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(0, 0, 0)",
            points: [
                new Vector2(0, 0),
                new Vector2(0, 200),
                new Vector2(25, 200),
                new Vector2(25, 0),
            ]
        })
        this.addComponent(new TimingCursorController())
    }
}