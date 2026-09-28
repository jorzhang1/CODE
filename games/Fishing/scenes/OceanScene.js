class OceanScene extends Scene {
    constructor() {
        super()
        this.instantiate(new Person(), new Vector2(50, 150))
        this.instantiate(new FishingRod(), new Vector2(60, 150))
        this.instantiate(new FishSpawner(), new Vector2(500, 500))
        this.instantiate(new Boat(), new Vector2(100, 200))
        this.instantiate(new Decoration(), new Vector2(0, 0))
        this.instantiate(new MoneyGameObject(), new Vector2(1000, 100))
    }
}