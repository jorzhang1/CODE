class LootCatalog {
    static items = [
        {
            id: "blue_boat",
            name: "Blue Boat",
            type: "boatSkin",
            rarity: "common",
            color: "rgba(209, 209, 209, 1)",
            weight: 80
        },
        {
            id: "coral_boat",
            name: "Coral Boat",
            type: "boatSkin",
            rarity: "uncommon",
            color: "rgba(78, 212, 87, 1)",
            weight: 17
        },
        {
            id: "gold_rod",
            name: "Golden Rod",
            type: "rodSkin",
            rarity: "rare",
            color: "rgba(102, 88, 255, 1)",
            weight: 3
        }
    ]

    static getRandomItem() {
        let total = 0
        for (const item of this.items) {
            total += item.weight
        }
        let randomNum = Math.random() * total + 0
        for (const item of this.items) {
            randomNum -= item.weight
            if (randomNum < 0) {
                return item
            }

        }
    }
}