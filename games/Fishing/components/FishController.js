class FishController extends Component {
    start() {
        this.caught = false
        this.currentTime = 0
    }

    update() {
        this.currentTime += Time.deltaTime

        if (this.caught == false) {
            this.transform.position.x += this.gameObject.speed * Time.deltaTime
            if (Math.floor(this.currentTime) % 2 == 0) {
                this.transform.position.y += Math.random() * 1 + 0 * Time.deltaTime
            } else if (Math.floor(this.currentTime) % 2 == 1) {
                this.transform.position.y -= Math.random() * 1 + 0 * Time.deltaTime
            }
        }


        if (this.transform.position.x > 700) {
            this.gameObject.destroy()
        }
    }
}
