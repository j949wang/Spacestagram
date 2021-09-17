import React, { Component } from "react";
import Particles from "react-particles-js"
import ParticleConfig from "../config/particleConfig"

class ParticlesBackground extends Component {
  render() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
  }
}

export default ParticlesBackground