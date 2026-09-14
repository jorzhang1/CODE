class FishController extends Component {

    start() {
        this.timeSinceLastFish = 0
        this.speed = Math.random() * 10
        console.log(this.speed)
    }

    update() {
        this.timeSinceLastFish += 1

        if (this.timeSinceLastFish > 10) {
            this.timeSinceLastFish = 0
            instantiate(new Fish(), new Vector2(0, Math.random() * 400 + 250))
        }

        this.transform.position.x += 15

        if (this.transform.position.x > 2000) {
            return
        }

    }
}
