class Hook extends GameObject {
    constructor() {
        super()
        this.addComponent(new HookController())
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(0, 0, 0)", 
            points: [
                new Vector2(-30, 0),
                new Vector2(-10, -15),
                new Vector2(15, -15),
            
            ]
        })
    }
}