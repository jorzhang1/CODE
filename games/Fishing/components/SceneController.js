class SceneController extends Component {

    update() {
        if (Input.keysDownThisFrame.includes("KeyU")) {
            if (SceneManager.currentScene instanceof OceanScene) {
                SceneManager.loadScene(ShopScene)
            } else if (SceneManager.currentScene instanceof ShopScene) {
                SceneManager.loadScene(OceanScene)
            }
        }
    }
}