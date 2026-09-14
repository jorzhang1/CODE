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
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        Engine.currentScene.update()
    }

    static draw() {
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        Engine.ctx.fillStyle = "rgb(136, 190, 193)"
        Engine.ctx.fillRect(0, 150, Engine.canvas.width, Engine.canvas.height)
        Engine.currentScene.draw(Engine.ctx)
    }
}