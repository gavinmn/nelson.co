import React, { Component } from "react"
import { Shaders, Node, GLSL } from "gl-react"
import { Surface } from "gl-react-dom"

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  logoGL: {
    // This is our first fragment shader in GLSL language (OpenGL Shading Language)
    // (GLSL code gets compiled and run on the GPU)
    frag: GLSL`	
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);
}
`,
    // the main() function is called FOR EACH PIXELS
    // the varying uv is a vec2 where x and y respectively varying from 0.0 to 1.0.
    // we set in output the pixel color using the vec4(r,g,b,a) format.
    // see GLSL_ES_Specification_1.0.17
  },
})

export default class LogoShader extends Component {
  render() {
    return (
      <Surface width={200} height={200}>
        <Node shader={shaders.logoGL} />
      </Surface>
    )
    // Surface creates the canvas, an area of pixels where you can draw.
    // Node instanciates a "shader program" with the fragment shader defined above.
  }
}
