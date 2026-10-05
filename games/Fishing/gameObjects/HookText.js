class HookText extends GameObject {
    constructor() {
        super("HookText", [], "player")
        this.addComponent(new Textlabel(), { text: "Press T to catch fish", fillStyle: "black", font: "32px Fredoka" })
        this.addComponent(new HookTextController())
    }
}