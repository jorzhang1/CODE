class FishController extends Component {
    update() {
        this.transform.position.x += this.gameObject.speed * Time.deltaTime

        if (this.transform.position.x > 2000) {
            this.gameObject.destroy()
        }
    }
}
