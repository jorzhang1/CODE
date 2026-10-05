class Camera extends Component {
    backgroundColor = "rgb(255, 255, 255)"

    static get main() {
        return GameObject.findGameObjectsWithTag("MainCamera")[0].getComponent(Camera)
    }
}