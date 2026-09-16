class FishSpawner extends GameObject {
    constructor() {
        super("FishSpawner")
        this.addComponent(new FishSpawnerController())
    }
}