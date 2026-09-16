class Decoration extends GameObject {
    constructor() {
        super("Decoration")
        this.addComponent(new DecorationController())
    }
}