class HookText extends GameObject {
    constructor() {
        super("HookText")
        this.addComponent(new Textlabel(), { text: "Press T to catch fish", fillStyle: "Orange" })
        this.addComponent(new HookTextController())
    }
}