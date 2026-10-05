class WinText extends GameObject {
    constructor() {
        super("WinText", [], "minigame")
        let catchPhrases = [
            "Nice catch!",
            "Fish hooked!",
            "You got one!",
            "Caught it!",
            "Reel success!",
            "Fresh catch!",
            "That was close!",
            "A keeper!",
            "Great timing!",
            "Hook, line, and sinker!",
            "Big catch!",
            "Lucky catch!",
            "Smooth reeling!",
            "Fish secured!"
        ]

        let index = Math.floor(Math.random() * catchPhrases.length)
        this.phrase = catchPhrases[index]

        this.textColor = "143, 255, 163"
        this.addComponent(new Textlabel(), { text: "", font: "60px Fredoka", fillStyle: "rgba(143, 255, 163, 1)" })
        this.addComponent(new ResultTextController())
    }
}