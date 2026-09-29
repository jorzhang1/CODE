class FishingLine extends GameObject {
    constructor() {
        super("FishingLine")
        this.addComponent(new Polygon(), { fillStyle: "black" })
        this.addComponent(new FishingLineController())
    }
}