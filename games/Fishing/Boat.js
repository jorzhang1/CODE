class Boat extends GameObject {
    constructor() {
        super()
        this.addComponent(new Polygon(), {
            fillStyle: "rgb(73, 70, 50)",
            points: [
                new Vector2(-100, -40),  
                new Vector2(100, -40),  
                new Vector2(70, 20),   
                new Vector2(30, 50),    
                new Vector2(-60, 50),    
                new Vector2(-90, 20),
            ]
        })
    }
}