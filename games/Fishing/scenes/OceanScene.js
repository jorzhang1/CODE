class OceanScene extends Scene {
    constructor() {
        super()
        this.instantiate(new Person(), new Vector2(-550, -250))
        this.instantiate(new FishingRod(), new Vector2(-540, -250))
        this.instantiate(new FishSpawner(), new Vector2(0, 0))
        this.instantiate(new Boat(), new Vector2(-550, -200))
        this.instantiate(new Decoration(), new Vector2(0, 0))
        this.instantiate(new MoneyGameObject(), new Vector2(500, -250))
        this.instantiate(new Instructions(), new Vector2(-400, -300))
        this.instantiate(new Water(), new Vector2(-750, -150))
    }
}