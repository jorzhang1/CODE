class Person extends GameObject {
    constructor() {
        super("Person")
        this.addComponent(new PersonController())
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(222, 217, 187)", points: [
                new Vector2(-15, 20),
                new Vector2(15, 20),
                new Vector2(15, -20),
            ]
        })
    }
}