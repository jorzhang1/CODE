class LootBoxText extends GameObject {
    constructor() {
        super("LootBoxText", [], "UI")

        this.addComponent(new Textlabel(), { text: "Press space to unlock", fillStyle: "black", font: "32px Fredoka" })
    }
}