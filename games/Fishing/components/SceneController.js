class SceneController extends Component {
    start() {
        this.scene = SceneManager.currentScene
    }

    update() {
        if (Input.keysDown.includes("KeyU") && this.scene == OceanScene) {
            SceneManager.loadScene(ShopScene)
            this.scene = ShopScene
        } else if (Input.keysDown.includes("KeyU") && this.scene == ShopScene) {
            SceneManager.loadScene(OceanScene)
            this.scene = OceanScene
        }
    }
}