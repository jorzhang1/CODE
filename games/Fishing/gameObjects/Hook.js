class Hook extends GameObject {
    constructor() {
        super("Hook", [], "player")
        this.addComponent(new HookController())
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(0, 0, 0)", 
            points: [
                new Vector2(0, 0),
                new Vector2(0, 5),
                new Vector2(0, 10),
                new Vector2(0, 15),
                new Vector2(0, 20),
                new Vector2(0, 25),
                new Vector2(0, 30),
                new Vector2(5, 35),
                new Vector2(10, 45),
                new Vector2(15, 50),
                new Vector2(20, 50),
                new Vector2(25, 50),
                new Vector2(30, 45),
                new Vector2(35, 40),
                new Vector2(35, 35),
                new Vector2(35, 30),

                new Vector2(32, 30),
                new Vector2(32, 35),
                new Vector2(32, 40),
                new Vector2(27, 45),
                new Vector2(22, 47),
                new Vector2(17, 47),
                new Vector2(12, 47),
            ]
        })
    }
}