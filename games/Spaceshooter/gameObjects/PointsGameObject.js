class PointsGameObject extends GameObject {
    constructor() {
        super("PointsGameObject", [], "UI")
        this.addComponent(new Textlabel(), { text: "0 points", fillStyle: "white", font: "32px Fredoka" })
        this.addComponent(new PointsController())
    }
}