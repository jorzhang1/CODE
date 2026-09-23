class FishSpawnerController extends Component {
    start() {
        this.timeSinceLastFish = 0
        this.fishID = 0
    }

    update() {
        this.timeSinceLastFish += Time.deltaTime

        if (this.timeSinceLastFish > 1) {
            this.timeSinceLastFish = 0
            instantiate(new Fish(this.fishID), new Vector2(0, Math.random() * 400 + 300))
            this.fishID += 1
        }
    }
}

