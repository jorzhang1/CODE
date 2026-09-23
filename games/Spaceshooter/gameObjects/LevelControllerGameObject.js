class LevelControllerGameobject extends GameObject {
    constructor(){
        super("LevelControllerGameObject")
        this.addComponent(new LevelController())
    }
}