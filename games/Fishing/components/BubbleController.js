class BubbleController extends Component {
    update() {
        this.transform.position.y -= this.gameObject.speed * Time.deltaTime

        if (this.transform.position.y < 300) {
            this.gameObject.destroy()
        }
    }
}
