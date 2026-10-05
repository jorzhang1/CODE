class PointsController extends Component {
    update() {
        this.gameObject.getComponent(Textlabel).text = Globals.points + " points"
    }

    updatePoints(delta) {
        Globals.points += delta
    }
}