class Countdown extends GameObject {
    constructor() {
        super("Countdown")
        this.addComponent(new Textlabel(), { fillStyle: "black", font: "32px Fredoka" })
    }
}