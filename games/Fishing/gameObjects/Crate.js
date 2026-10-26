class Crate extends GameObject {
    constructor() {
        super("Crate", ["Crate"], "fish")        
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(139, 89, 51)",
            points: [
                new Vector2(0, 0),
                new Vector2(100, 0),
                new Vector2(100, 100),
                new Vector2(0, 100),
            ]
        })
        this.addComponent(new CrateController())
    }
}