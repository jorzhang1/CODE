class FishingLineController extends Component {
    start(){

    }

    update() {
        let hook = GameObject.find("Hook")
        if (!hook) {
            this.gameObject.destroy()
            return
        }

        this.transform.position = new Vector2(110, 120)
        let hookPosition = hook.transform.position.minus(this.transform.position)
        this.gameObject.getComponent(Polygon).points = [
            new Vector2(-2, 0),
            new Vector2(2, 0),
            new Vector2(hookPosition.x + 2, hookPosition.y),
            new Vector2(hookPosition.x - 2, hookPosition.y)
        ]
    }
}