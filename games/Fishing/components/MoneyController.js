class MoneyController extends Component {
    update() { 
        this.gameObject.getComponent(Textlabel).text = "$" + Globals.money
    }
}