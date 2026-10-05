class MoneyGameObject extends GameObject {
    constructor() {
        super("MoneyGameObject", [], "minigame")
        this.addComponent(new Textlabel(), {text:"$0", font: "50px Fredoka"})
        this.addComponent(new MoneyController())
    }
}