import React, { useRef, useEffect } from "react"

const Canvas = props => {
  const canvasRef = useRef(null)

  const draw = (context, x, y, r, g, b) => {
    context.fillStyle = `rgb(${r}, ${g}, ${b})`
    context.fillRect(x, y, 10, 10)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    // let frameCount = 0
    let animationFrameId
    let x = 0
    let y = 0
    let time = 0

    const R = function (x, y, time) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time))
    }
    const G = function (x, y, time) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
            )
      )
    }
    const B = function (x, y, time) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(time / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      )
    }
    const render = () => {
      for (x = 0; x <= 30; x++) {
        for (y = 0; y <= 30; y++) {
          draw(context, x, y, R(x, y, time), G(x, y, time), B(x, y, time))
        }
      }
      time = time + 0.03
      //   frameCount++
      window.requestAnimationFrame(render)
    }
    render()
  }, [draw])

  return <canvas width="32px" height="32px" ref={canvasRef} {...props} />
}

export default Canvas
