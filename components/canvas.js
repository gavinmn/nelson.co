// most code from https://codepen.io/tmrDevelops/pen/vOPZBv and https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

import React, { useRef, useEffect } from "react"

const Canvas = props => {
  const canvasRef = useRef(null)

  const draw = (context, x, y, r, g, b) => {
    context.fillStyle = `rgb(0, ${g}, ${b})`
    context.fillRect(x, y, 32, 32)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    let x = 0
    let y = 0
    let time = 0
    let animationFrameId = null

    const R = function (x, y, time) {
      return Math.floor(20 + 64 * Math.cos((x * x + y * y) / 300 + time))
    }
    const G = function (x, y, time) {
      return Math.floor(130 + 64 * Math.cos((x * x - y * y) / 200 + time))
    }
    const B = function (x, y, time) {
      return Math.floor(255 + 64 * Math.cos((x * x + y * y) / 300 + time))
    }
    const render = () => {
      for (x = 0; x <= 30; x++) {
        for (y = 0; y <= 30; y++) {
          draw(context, x, y, R(x, y, time), G(x, y, time), B(x, y, time))
        }
      }
      time = time + 0.02
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas width="32" height="32" ref={canvasRef} {...props} />
}

export default Canvas
