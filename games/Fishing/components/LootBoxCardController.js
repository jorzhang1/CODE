class LootBoxCardController extends Component {
    update() {
        this.transform.position.x +=  1000 * Time.deltaTime

        if (this.transform.position.x > 1500) {
            this.gameObject.destroy()
        }
    }
}
