class FishController extends Component {

    start() {
        this.timeSinceLastFish = 0
    }

    update() {
        this.timeSinceLastFish += 1

        if (this.timeSinceLastFish > 120) {
            this.timeSinceLastFish = 0
            instantiate(new Fish(), new Vector2(Math.random() * 500, Math.random() * 500))
        }

        this.transform.position.x += 1
    }
}
