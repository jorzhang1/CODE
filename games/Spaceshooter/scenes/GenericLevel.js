class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(100, 100))
        this.instantiate(new PointsGameObject(), new Vector2(50, 50))
        let helperGameObject1 = this.instantiate(new HelperGameObject(), new Vector2(200, 200))

        helperGameObject1.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new Textlabel(), { text: "", font: "200px Fredoka", fillStyle: "rgba(143, 255, 163, 1)" })
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(500, 500))
    }
}