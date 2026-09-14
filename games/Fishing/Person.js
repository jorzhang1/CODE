class Person extends GameObject {
    constructor() {
        super()
        this.addComponent(new PersonController())
        this.addComponent(new Polygon(), {
            fillStyle: "Orange", points: [
                new Vector2(-15, 20),
                new Vector2(15, 20),
                new Vector2(15, -20),
            ]
        })
    }
}