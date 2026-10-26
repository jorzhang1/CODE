class FishSpawnerController extends Component {
    start() {
        this.timeSinceLastFish = 0
    }

    update() {
        this.timeSinceLastFish += Time.deltaTime

        if (this.timeSinceLastFish > 1) {
            this.timeSinceLastFish = 0
            let crate = Math.random() * 100
            if (crate < 5) {
                instantiate(new Crate(), new Vector2(-750, Math.random() * 400 + -75))
            } else {
                instantiate(new Fish(), new Vector2(-750, Math.random() * 400 + -75))
            }
        }
    }
}

