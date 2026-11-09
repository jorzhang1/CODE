class Boat extends GameObject {
    constructor() {
        super("Boat", [], "player")
        let boatColor = "rgb(139, 89, 51)"

        for (const item of LootCatalog.items) {
            if (item.id == Globals.equippedBoatSkinId) {
                boatColor = item.color
            }
        }
        
        this.addComponent(new Polygon(), {
            fillStyle: boatColor,
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