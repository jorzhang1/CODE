class TimingCursorController extends Component {
    start() {
        this.direction = "right"
    }

    update() {
        if (this.direction == "right") {
            this.transform.position.x += 1250 * Time.deltaTime
            if (this.transform.position.x > 1100) {
                this.direction = "left"
            }
        } else if (this.direction == "left") {
            this.transform.position.x -= 1250 * Time.deltaTime
            if (this.transform.position.x < 500) {
                this.direction = "right"
            }
        }
    }
}