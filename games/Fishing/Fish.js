class Fish extends GameObject {
    constructor() {
        super()
        this.addComponent(new FishController())
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(116, 120, 181)", 
            points: [
                new Vector2(-30, 0),
                new Vector2(-10, -15),
                new Vector2(15, -15),
                new Vector2(30, 0),
                new Vector2(15, 15),
                new Vector2(-10, 15),
                new Vector2(-30, 0),
                new Vector2(-50, -20),
                new Vector2(-45, 0),
                new Vector2(-50, 20),
                new Vector2(-30, 0)
            ]
        })
    }
}