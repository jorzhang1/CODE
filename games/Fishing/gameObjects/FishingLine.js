class FishingLine extends GameObject {
    constructor() {
        super("FishingLine", [], "player")
        this.addComponent(new Polygon(), { fillStyle: "black" })
        this.addComponent(new FishingLineController())
    }
}