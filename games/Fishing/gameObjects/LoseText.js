class LoseText extends GameObject {
    constructor() {
        super("LoseText")
        let lostPhrases = [
            "The fish got away!",
            "So close!",
            "It slipped away!",
            "Missed it!",
            "Better luck next time!",
            "The line went slack!",
            "Almost had it!",
            "Try again!",
            "That one was tricky!",
            "Gone fishing... again!"
        ]
        let index = Math.floor(Math.random() * lostPhrases.length)
        this.phrase = lostPhrases[index]

        this.addComponent(new Textlabel(), { text: this.phrase, font: "50px Fredoka", fillStyle: "rgb(177, 70, 70)" })
        this.addComponent(new ResultTextController())
    }
}