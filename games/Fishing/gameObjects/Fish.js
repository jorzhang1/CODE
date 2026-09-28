class Fish extends GameObject {
    constructor(fishID) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        super("Fish", ["Fish"])
        this.addComponent(new FishController())
        this.addComponent(new Polygon(), {
            fillStyle: `rgb(${r}, ${g}, ${b})`,
            points: [
                new Vector2(-30, 0),
                new Vector2(-10, -15),
                new Vector2(15, -15),
                new Vector2(30, 0),
                new Vector2(15, 15),
                new Vector2(-10, 15),
                new Vector2(-30, 0),
                new Vector2(-50, -20),
                new Vector2(-45, 0),
                new Vector2(-50, 20),
                new Vector2(-30, 0)
            ]
        })
        this.speed = Math.random() * 400 + 50
        this.value = Math.floor(this.speed)
        this.size = 0
        this.fishID = fishID
    }
}