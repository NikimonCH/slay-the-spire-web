import * as THREE from "three";
import HeroController from "./heroController";

export default class Scene {
  bg: any;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  light: THREE.AmbientLight;

  constructor(target: HTMLElement | string) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setAnimationLoop(() => {
      this.animate();
    });

    if (typeof target === "string") {
      const node = document.getElementById(target);
      if (!node) throw new Error("Target not found");
      target = node;
    }
    target.appendChild(this.renderer.domElement);

    this.light = new THREE.AmbientLight(0xffffff, 1);
    this.light.position.set(2, 2, 2);
    this.light.lookAt(new THREE.Vector3());
    this.scene.add(this.light);
    this.camera.position.z = 5;

    let character = new HeroController(this);
  }

  createCubeController() {}

  animate() {
    this.renderer.render(this.scene, this.camera);
  }
  add(target: any) {
    this.scene.add(target);
  }
  dispose() {
    this.renderer.dispose();
  }
}
