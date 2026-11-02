class ShopScene extends Scene {
    constructor() {
        super("White")
        this.instantiate(new MoneyGameObject(), new Vector2(500, -250))
        let leftSide = this.instantiate(new BackgroundWall(), new Vector2(-650, -300))
        let rightSide = this.instantiate(new BackgroundWall(), new Vector2(0, -300))
        this.instantiate(new SceneControllerGameobject(), new Vector2(0, 0))
        let shopController = this.instantiate(new GameObject())
        shopController.addComponent(new ShopController())

        let characterGroup = new GameObject("characterGroup", [], "background")
        characterGroup.transform.setParent(rightSide.transform)
        let character = this.instantiate(new Person(), new Vector2(125, 125))
        let box1 = this.instantiate(new AccessoryBox(), new Vector2(20, 20))
        character.transform.setParent(box1.transform)
        box1.transform.setParent(characterGroup.transform)
        let text1 = new GameObject("text1", [], "background")
        text1.addComponent(new Textlabel(), { text: "Character", font: "20px Fredoka" })
        this.instantiate(text1, new Vector2(12, 25))
        text1.transform.setParent(box1.transform)

        let boatGroup = new GameObject("boatGroup", [], "background")
        boatGroup.transform.setParent(rightSide.transform)
        let boat = this.instantiate(new Boat(), new Vector2(125, 125))
        let box2 = this.instantiate(new AccessoryBox(), new Vector2(320, 20))
        box2.transform.setParent(boatGroup.transform)
        boat.transform.setParent(box2.transform)
        let text2 = new GameObject("text2", [], "background")
        text2.addComponent(new Textlabel(), { text: "Boat", font: "20px Fredoka" })
        this.instantiate(text2, new Vector2(12, 25))
        text2.transform.setParent(box2.transform)


        let rodGroup = new GameObject("rodGroup", [], "background")
        rodGroup.transform.setParent(rightSide.transform)
        let box3 = this.instantiate(new AccessoryBox(), new Vector2(20, 320))
        let rod = this.instantiate(new FishingRod(), new Vector2(125, 125))
        box3.transform.setParent(rodGroup.transform)
        rod.transform.setParent(box3.transform)
        let text3 = new GameObject("text3", [], "background")
        text3.addComponent(new Textlabel(), { text: "Fishing Rod", font: "20px Fredoka" })
        this.instantiate(text3, new Vector2(12, 25))
        text3.transform.setParent(box3.transform)

        let hookGroup = new GameObject("hookGroup", [], "background")
        hookGroup.transform.setParent(rightSide.transform)
        let box4 = this.instantiate(new AccessoryBox(), new Vector2(320, 320))
        let hook = this.instantiate(new Hook(), new Vector2(125, 125))
        box4.transform.setParent(hookGroup.transform)
        hook.transform.setParent(box4.transform)
        let text4 = new GameObject("text4", [], "background")
        text4.addComponent(new Textlabel(), { text: "Hook", font: "20px Fredoka" })
        this.instantiate(text4, new Vector2(12, 25))
        text4.transform.setParent(box4.transform)


        let crateCount = new GameObject("crateCount", [], "background")
        crateCount.addComponent(new Textlabel(), { text: Globals.crateCount + " crates" })
        this.instantiate(crateCount, new Vector2(100, 20))
        crateCount.transform.setParent(leftSide.transform)

        let crateTitle = new GameObject("crateTitle", [], "background")
        crateTitle.addComponent(new Textlabel(), { text: "Crates", font: "28px Fredoka" })
        this.instantiate(crateTitle, new Vector2(100, 60))
        crateTitle.transform.setParent(leftSide.transform)

        let crateDisplay = new GameObject("crateDisplay", [], "background")
        crateDisplay.addComponent(new Polygon(), {
            fillStyle: "rgb(139, 89, 51)",
            points: [
                new Vector2(0, 0),
                new Vector2(100, 0),
                new Vector2(100, 100),
                new Vector2(0, 100)
            ]
        })
        this.instantiate(crateDisplay, new Vector2(100, 110))
        crateDisplay.transform.setParent(leftSide.transform)

        let cratePrice = new GameObject("cratePrice", [], "background")
        cratePrice.addComponent(new Textlabel(), {
            text: "Buy crate: $" + Globals.cratePrice,
            font: "20px Fredoka"
        })
        this.instantiate(cratePrice, new Vector2(70, 240))
        cratePrice.transform.setParent(leftSide.transform)

        let shopTitle = new GameObject("shopTitle", [], "UI")
        shopTitle.addComponent(new Textlabel(), { text: "Upgrade Shop", font: "36px Fredoka" })
        this.instantiate(shopTitle, new Vector2(350, 25))

        let shopInstructions = new GameObject("ShopInstructions", [], "UI")

        shopInstructions.addComponent(new Textlabel(), {
            text: "Press B - buy crate ($" + Globals.cratePrice + ")",
            font: "28px Fredoka"
        })

        shopInstructions.addComponent(new Textlabel(), {
            text: "Press O - open crate",
            font: "28px Fredoka",
            offset: new Vector2(0, 40)
        })

        shopInstructions.addComponent(new Textlabel(), {
            text: "Press U - return to ocean",
            font: "28px Fredoka",
            offset: new Vector2(0, 80)
        })

        this.instantiate(shopInstructions, new Vector2(350, 80))
    }
}
