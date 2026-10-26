class Instructions extends GameObject {
    constructor() {
        super("Instructions", [], "UI")
        this.addComponent(new Textlabel(), { text: "Press Space - cast rod", font: "32px Fredoka" })
        this.addComponent(new Textlabel(), { text: "Press R - reel in", font: "32px Fredoka", offset: new Vector2(0, 45) })
        this.addComponent(new Textlabel(), { text: "Press U - upgrade shop", font: "32px Fredoka", offset: new Vector2(0, 90) })
    }
}