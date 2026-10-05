class TimingText extends GameObject {
    constructor() {
        super("TimingText", [], "minigame")
        this.addComponent(new Textlabel(), {text:"Rounds left: 3", font:"20px Fredoka"})
    }
}