class Minigame extends GameObject {
    constructor () {
        super()
        
        this.addComponent(new Polygon(), {
            fillStyle: "rgba(138, 137, 137, 0.84)",
            points: [
                new Vector2(500, 500),  
                new Vector2(1000, 500),  
                new Vector2(1000, 100),  
                new Vector2(500, 100),  
            ]
        })
    }

    start() {

    }

    update() {

    }
}