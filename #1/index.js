const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const gravity = .5

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }

    this.velocity = {
      x: 0,
      y: 0
    }

    this.width = 30
    this.height = 30
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x

    this.draw()

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    } else {
      this.velocity.y = 0
    }
  }
}

const player = new Player()

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  player.update()

  if (keys.right.pressed) {
    player.velocity.x = 5
  } else if (keys.left.pressed) {
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
  }

}

animate()

window.addEventListener('keydown', (event) => {
  const { key: _key } = event;

  const key = _key.toLowerCase()

  switch (key) {
    case 'w':
      player.velocity.y -= 20
      break;

    case 's':
      // player.velocity.y += 20
      break;

    case 'a':
      keys.left.pressed = true
      break;

    case 'd':
      keys.right.pressed = true
      break;

  }
})

window.addEventListener('keyup', (event) => {
  const { key: _key } = event;

  const key = _key.toLowerCase()

  switch (key) {
    case 'w':
      player.velocity.y -= 20
      break;

    case 's':
      // player.velocity.y = 0
      break;

    case 'a':
      keys.left.pressed = false
      break;

    case 'd':
      keys.right.pressed = false
      break;

  }
})