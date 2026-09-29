class HookText extends GameObject {
    constructor() {
        super("HookText")
        this.addComponent(new Textlabel(), { text: "Press T to catch fish", fillStyle: "white", font: "32px Fredoka" })
        this.addComponent(new HookTextController())
    }
}