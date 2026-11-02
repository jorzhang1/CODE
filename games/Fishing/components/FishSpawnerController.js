class FishSpawnerController extends Component {
    start() {
        this.timeSinceLastFish = 0
    }

    update() {
        this.timeSinceLastFish += Time.deltaTime

        if (this.timeSinceLastFish > 0.5) {
            this.timeSinceLastFish = 0
            let crate = Math.random() * 100
            if (crate < 50) {
                instantiate(new Crate(), new Vector2(-900, Math.random() * 400 + -100))
            } else {
                instantiate(new Fish(), new Vector2(-750, Math.random() * 400 + -100))
            }
        }
    }
}

