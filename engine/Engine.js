class Engine {
    static canvas
    static ctx

    static start(nextScene) {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        SceneManager.nextScene = nextScene
        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        SceneManager.update()
        Engine.update()
        Engine.draw()

        Time.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        Engine.ctx.fillStyle = "hsla(212, 100%, 72%, 0.63)"
        Engine.ctx.fillRect(0, 250, Engine.canvas.width, Engine.canvas.height)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}