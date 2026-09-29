class HookText extends GameObject {
    constructor() {
        super("HookText")
        this.addComponent(new Textlabel(), { text: "Press T to catch fish", fillStyle: "red", font: "20px Arial" })
        this.addComponent(new HookTextController())
    }
}