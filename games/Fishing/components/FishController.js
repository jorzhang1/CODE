class FishController extends Component {
    start() {
        this.caught = false
    }

    update() {
        if (this.caught == false) {
            this.transform.position.x += this.gameObject.speed * Time.deltaTime
            this.transform.position.y += Math.random() * 1 + 0 * Time.deltaTime
            this.transform.position.y -= Math.random() * 1 + 0 * Time.deltaTime
        }


        if (this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
}
