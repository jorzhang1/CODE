class SpamText extends GameObject {
    constructor() {
        super("SpamText")
        this.addComponent(new Textlabel(), {text:"TAP SPACE!"})
        this.addComponent(new SpamTextController())
    }
}