class PointsGameObject extends GameObject {
    constructor() {
        super("PointsGameObject")
        this.addComponent(new Textlabel(), {text:"0 points"})
    }
}