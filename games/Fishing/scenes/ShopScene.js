class ShopScene extends Scene {
    constructor() {
        super("White")
        this.instantiate(new Person(), new Vector2(0, 0))
        this.instantiate(new FishingRod(), new Vector2(100, 100))
        this.instantiate(new Boat(), new Vector2(200, 200))
        this.instantiate(new MoneyGameObject(), new Vector2(500, -250))
        this.instantiate(new Instructions(), new Vector2(350, 80))
        this.instantiate(new BackgroundWall(), new Vector2(-650, -300))
        this.instantiate(new BackgroundWall(), new Vector2(0, -300))
        this.instantiate(new SceneControllerGameobject(), new Vector2(0, 0))
    }
}