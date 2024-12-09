import * as THREE from "three";
import Scene from "./scene";

export default class HeroController {
  geometry: THREE.BoxGeometry;
  material: THREE.MeshLambertMaterial | THREE.MeshBasicMaterial;
  model: THREE.Mesh;

  constructor(scene: Scene) {
    this.geometry = new THREE.BoxGeometry(1.5, 2.5, 0.01);
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      "https://tiermaker.com/images/templates/slay-the-spire-card-ironclad-tier-list--ver22-731115/7311151609073119.png"
    );

    this.material = new THREE.MeshBasicMaterial({ map: texture });
    // this.material = THREE.MeshBasicMaterial(new THREE.PlaneGeometry(200,200),)
    this.model = new THREE.Mesh(this.geometry, this.material);
    this.model.position.x = -4;
    scene.add(this.model);
  }

  dispose() {
    this.material.dispose();
  }
}
