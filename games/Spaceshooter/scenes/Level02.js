class Level02 extends Scene {
    constructor() {
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(50, 50), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(100, 100), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(200, 200), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(300, 300), Math.PI)
        this.instantiate(new LevelControllerGameobject())
    }
}