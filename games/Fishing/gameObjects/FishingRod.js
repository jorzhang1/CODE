class FishingRod extends GameObject {
    constructor() {
        super("FishingRod", [], "player")
        this.addComponent(new FishingRodController())
        let rodColor = "rgba(114, 205, 134, 0.9)"

        for (const item of LootCatalog.items) {
            if (item.id == Globals.equippedRodSkinId) {
                rodColor = item.color
            }
        }
        this.addComponent(new Polygon(), {
            fillStyle: rodColor,
            points: [
                new Vector2(0, 30),
                new Vector2(5, 30),
                new Vector2(50, -30),
                new Vector2(45, -35),
                new Vector2(0, 25)
            ]
        })
    }
}