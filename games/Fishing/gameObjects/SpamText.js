class SpamText extends GameObject {
    constructor() {
        super("SpamText")
        this.addComponent(new Textlabel(), {text:"SPAM!"})
    }
}