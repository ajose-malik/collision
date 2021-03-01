const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

// const width = window.screen.width
// const height = window.screen.height

const height = window.innerHeight
const width = window.innerWidth
const engine = Engine.create()
const { world } = engine
const render = Render.create({
	element: document.body,
	engine,
	options: {
		wireframes: false,
		width,
		height
	}
})
Render.run(render)
Runner.run(Runner.create(), engine)
// Render.setPixelRatio(render, "auto")

World.add(
	world,
	MouseConstraint.create(engine, {
		mouse: Mouse.create(render.canvas)
	})
)

const walls = [
	Bodies.rectangle(width - width / 1.5, height, width / 1.2, 1, {
		isStatic: true
	}), //ground
	Bodies.rectangle(width / 1.5, height / 3, width / 4, 40, { isStatic: true }),
	Bodies.rectangle(width / 3, height / 1.5, width / 6, 40, { isStatic: true }),
	// Bodies.rectangle(200, height / 6, width / 6, 100, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 1, height, { isStatic: true }), // Left wall
	Bodies.rectangle(width, height / 2, 1, height, { isStatic: true }) //Right wall
]

World.add(world, walls)

//Random Shapes
for (let i = 0; i < Math.floor(height / 50); i++) {
	if (Math.random() < 0.2) {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 30, {
				render: {
					fillStyle: "#ffa726"
				}
			})
		)
	} else if (Math.random() > 0.2 && Math.random() < 0.4) {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 25, {
				render: {
					fillStyle: "#ec407a"
				}
			})
		)
	} else if (Math.random() > 0.4 && Math.random() < 0.6) {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 20, {
				render: {
					fillStyle: "#7cb342"
				}
			})
		)
	} else if (Math.random() > 0.6 && Math.random() < 0.8) {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 35, {
				render: {
					fillStyle: "#40c4ff"
				}
			})
		)
	} else {
		World.add(
			world,
			Bodies.circle(Math.random() * width, Math.random() * height, 40, {
				render: {
					fillStyle: "#ab47bc"
				}
			})
		)
	}
}
