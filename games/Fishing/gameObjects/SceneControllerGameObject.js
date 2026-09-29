class SceneControllerGameobject extends GameObject {
    constructor(){
        super("SceneControllerGameObject")
        this.addComponent(new SceneController())
    }
}