class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new PlayerGameObject(), new Vector2(100, 100))
        this.instantiate(new PointsGameObject(), new Vector2(50, 50))
        let helperGameObject1 = this.instantiate(new HelperGameObject(), new Vector2(200, 200))

        helperGameObject1.transform.setParent(mainGameObject.transform)

        let sceneTimer = new GameObject("SceneTimer", [], "UI")
        sceneTimer.addComponent(new Textlabel(), { text: "", font: "200px Fredoka", fillStyle: "rgba(143, 255, 163, 1)" })
        sceneTimer.addComponent(new SceneTimerController())
        this.instantiate(sceneTimer, new Vector2(50, 300))

        let thing = new GameObject("Thing", [], "UI")
        thing.addComponent(new MultiLineTextLabel(), {
            text: "fahwi efuj ap9weu j0v9a8uw e0rb98fv aun0ef98u aho w8f u9ig jsuhyu rifjghtur8i458 tugyh frjeki34r9 5t8ughfr jekio49r5t ugjhfdeki49 58rtuh", font: "20px Fredoka", fillStyle: "rgba(143, 255, 163, 1)", maxWidth: 200 })
        this.instantiate(thing, new Vector2(50, 500))
    }
}