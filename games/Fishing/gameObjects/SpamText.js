class SpamText extends GameObject {
    constructor() {
        super("SpamText", [], "minigame")
        this.addComponent(new Textlabel(), {text:"TAP SPACE!"})
        this.addComponent(new SpamTextController())
    }
}