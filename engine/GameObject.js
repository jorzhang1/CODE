class GameObject {
    components = []
    markForDestroy = false
    name

    get transform() {
        return this.components[0]
    }

    constructor(name) {
        this.addComponent(new Transform())
        this.name = name
    }

    addComponent(component, parameters) {
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start() {
        for (const component of this.components.filter(c=>!c.didStart)) {
            component.start?.()
            component.didStart = true
        }
    }

    update() {
        for (const component of this.components) {
            component.update?.()
        }
    }

    draw(ctx) {
        for (const component of this.components) {
            component.draw?.(ctx)
        }
    }

    destroy() {
        this.markForDestroy = true
    }

    getComponent(type) {
        return this.components.find(c=>c instanceof type)
    }

    static find(name) {
        // return SceneManager.currentScene.gameObjects.find(function(go){return go.name == name)}
        return SceneManager.currentScene.gameObjects.find(go => go.name == name)
    }
}