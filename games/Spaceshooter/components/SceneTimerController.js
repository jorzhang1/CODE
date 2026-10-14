class SceneTimerController extends Component {
    startTime
    start() {
        this.startTime = Time.time
    }

    update() {
        let sceneTime = Time.time - this.startTime
        sceneTime = Math.floor(sceneTime * 100) / 100
        let sceneTimeMinutes = 0
        let sceneTimeSeconds = 0
        sceneTimeMinutes = Math.floor(sceneTime / 2)
        sceneTimeSeconds = sceneTime % 2

        this.gameObject.getComponent(Textlabel).text = sceneTimeMinutes + ":" + sceneTimeSeconds.toFixed(2)
    }
}