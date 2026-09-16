class FishSpawnerController extends Component {
    start() {
        this.timeSinceLastFish = 0
    }

    update() {
        this.timeSinceLastFish += Time.deltaTime

        if (this.timeSinceLastFish > 1) {
            this.timeSinceLastFish = 0
            instantiate(new Fish(), new Vector2(0, Math.random() * 400 + 300))
        }
    }
}

