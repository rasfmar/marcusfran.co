import React, { Component } from "react";
import { TeapotBufferGeometry } from "./TeapotBufferGeometry";
import * as THREE from "three";

export default class ThreeD extends Component {
  componentDidMount() {
    const width = 800;
    const height = 800;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;

    this.mount.appendChild(renderer.domElement);

    var material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    var ambientLight = new THREE.AmbientLight(0x333333);
    var light = new THREE.DirectionalLight(0xFFFFFF, 1.0);

    var geometry = new TeapotBufferGeometry(1, 15, true, true, true, false, true);
    var teapot = new THREE.Mesh(geometry, material);

    scene.add(teapot);
    scene.add(ambientLight);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      teapot.rotation.y += 0.01;
      teapot.rotation.x += 0.001;
      teapot.rotation.z += 0.001;
      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <div
        className="threed"
        ref={ref => (this.mount = ref)}
      />
    )
  }
}
