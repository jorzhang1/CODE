class TimingCursorController extends Component {
    start() {
        this.direction = "right"
    }

    update() {
        if (this.direction == "right") {
            this.transform.position.x += 1250 * Time.deltaTime
            if (this.transform.position.x > 375) {
                this.direction = "left"
            }
        } else if (this.direction == "left") {
            this.transform.position.x -= 1250 * Time.deltaTime
            if (this.transform.position.x < -200) {
                this.direction = "right"
            }
        }
    }
}