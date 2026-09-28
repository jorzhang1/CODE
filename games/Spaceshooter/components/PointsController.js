class PointsController extends Component {
    update() { 
        this.gameObject.getComponent(Textlabel).text = Globals.points + " points"
    }
}