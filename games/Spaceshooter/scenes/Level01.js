class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(50, 50), Math.PI)
        this.instantiate(new LevelControllerGameobject())
    }
}