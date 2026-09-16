class Engine {
    static canvas
    static ctx
    static currentScene

    static start() {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        Engine.currentScene.start()
        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        Engine.update()
        Engine.draw()

        Time.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        Engine.currentScene.update()
    }

    static draw() {
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        Engine.ctx.fillStyle = "hsla(212, 100%, 72%, 0.63)"
        Engine.ctx.fillRect(0, 250, Engine.canvas.width, Engine.canvas.height)
        Engine.currentScene.draw(Engine.ctx)
    }
}