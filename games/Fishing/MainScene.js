class MainScene extends Scene {
    constructor() {
        super()
        this.instantiate(new Person(), new Vector2(50, 50))
        this.instantiate(new FishingRod(), new Vector2(60, 50))
        this.instantiate(new Fish(), new Vector2(500, 500))
    }
}