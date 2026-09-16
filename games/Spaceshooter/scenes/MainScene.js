class MainScene extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(50, 500))
        this.instantiate(new EnemyGameObject(), new Vector2(50, 50), Math.PI)
    }
}