class MoneyGameObject extends GameObject {
    constructor() {
        super("MoneyGameObject")
        this.addComponent(new Textlabel(), {text:"$0", font: "50px sans serif"})
        this.addComponent(new MoneyController())
    }
}