
import * as THREE from "three"
export function pickupObjects(camera,event) {

}

//第三人称相机替换当前相机
export function changeThirdPersonCamera(target,controls,camera,cameraMap,fov=40){
  controls.object=camera;
  controls.target=target.position;
  // controls.maxDistance=100;
  controls.maxPolarAngle=Math.PI/2;
  controls.minPolarAngle=0;
  controls.enableZoom=true;
  camera.position.set(target.position.x-20,target.position.y+20,target.position.z-20)

}

//第一人称相机替换当前相机
export function changeFirstPersonCamera(target,controls,camera,cameraMap,fov=40) {
  controls.object=camera;
  const vec=new THREE.Vector3();
  vec.set(
    target.position.x+target.getWorldDirection(new THREE.Vector3()).dot(new THREE.Vector3(1,0,0))*2,
    target.position.y+4,
    target.position.z+target.getWorldDirection(new THREE.Vector3()).dot(new THREE.Vector3(0,0,1))*2,
  )
  controls.target=vec;
  controls.maxPolarAngle=Math.PI*2/3;
  controls.minPolarAngle=Math.PI/3;
  controls.enableZoom=false;
  camera.position.set(
    target.position.x,
    target.position.y+4,
    target.position.z
  )
}
//坐标辅助生成方法
export function helper(scene) {
  const grid = new THREE.GridHelper(100, 20, 0xFF0000, 0x000000);
  grid.material.opacity = 0.1;
  grid.material.transparent = true;
  scene.add(grid);
  const axesHelper = new THREE.AxesHelper(30);
  scene.add(axesHelper);

}
