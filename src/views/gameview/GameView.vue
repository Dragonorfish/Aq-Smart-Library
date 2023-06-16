<template>
    <div class="on_load" v-if="loadCount<totalCounts">
        <Loading></Loading>
    </div>

    <div class="game_body">
        <div style="position: absolute;z-index: 10;color: #00a4a2;font-size: 20px;margin: 10px">帧率：{{fps}}</div>
        <canvas id="three" tabindex="1"></canvas>
        <div class="header">
            <img style="position: absolute;left: 0" height="40" src="src/assets/static/xiaohui.png">
            <div class="floor_btn" v-for="item in floorList">{{item}}</div>
        </div>
        <div class="side_part" id="left_part">

        </div>
        <div class="side_part" id="right_part">

        </div>
    </div>

</template>

<style scoped>
    @import "index.css";
</style>

<script setup>
  import * as THREE from "three";
  import * as THREEutils from "../../utils/threeUtils"
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
  import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { onMounted, ref, watch } from "vue";

  //HDR载入器
  const rgbeLoader = new RGBELoader();
  //FBX载入器
  const gltfLoader=new GLTFLoader();

  let fps=ref(0);//帧数

  let mouseIsMove=false;//鼠标是否移动

  let mouseIsDown=false;//鼠标是否按下

  let camerasMap=new Map();//相机集

  let totalCounts=1;//目前总加载模型

  let loadCount=ref(0);//加载计数

  let floorList=[1,2,3,4,5,6,7,"all"]

  onMounted(() => {

    /**场景初始区**/

    let camera=makeCamera();//当前相机

      //加载渲染器到dom上
    const canvas = document.querySelector("#three");
    const renderer = new THREE.WebGLRenderer({
      //反锯齿
      antialias: true,
      canvas: canvas
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xaaaaaa);
    //设置像素比
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    //场景
    const scene = new THREE.Scene();

    //载入相机
    //初始相机
    const sceneCamera = makeCamera();
    sceneCamera.position.set(0, 100, 0);
    sceneCamera.lookAt(0,0,0);
    camerasMap.set("sceneCamera",sceneCamera);
    camera=sceneCamera;
    //轨道控制器
    let controls=new OrbitControls(camera,renderer.domElement);

    //光照
    initLight();

    //坐标辅助
    THREEutils.helper(scene)

    const geometry=new THREE.BoxGeometry(50,50,50);
    const material=new THREE.MeshPhongMaterial({color: 0x00ff00,side:THREE.DoubleSide});
    const cube=new THREE.Mesh(geometry,material);
    cube.position.set(0,0,0)


    /**模型载入区**/
    initModel();


    /**渲染区**/
    let timeCur=0;
    let timePre=0;
    let fps0=0;
    //循环渲染
    controls.update()

    function render(time1) {
        timeCur+=time1-timePre;
        timePre=time1;
        fps0+=1;
        if (timeCur>1000){
          fps.value=fps0;
          fps0=0;
          timeCur=0;
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(render);

    }

    requestAnimationFrame(render);

    /**方法区**/

    //初始化光照
    function initLight() {
      const ambientLight = new THREE.AmbientLight(0x523318,1);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
      directionalLight.position.set(1,1,1)
      scene.add( directionalLight );
    }

    //模型初始
    function initModel() {
      // gltfLoader.loadAsync("src/assets/static/Library/libmini.gltf").then((gltf) => {
      //   // glb.scene.scale.set(10,10,10);
      //   scene.add(gltf.scenes[0]);
      //   // console.log(gltf);
      //   loadCount.value+=1;
      // });
      loadCount.value+=1;
    }

    //canvas鼠标单击事件
    function threeClickEvent(e) {
      //如果是拖拽操作则不进行操作
      if (mouseIsDown && mouseIsMove) {
        mouseIsDown = false
        return
      }
      const intersects = getIntersectObjs(e)
      console.log(intersects)
      mouseIsDown = false
      // console.log(intersects);
    }

    //对象点击拾取事件
    function getIntersectObjs(e,target) {
      let mouse = {
        x: 0,
        y: 0
      }
        // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释百度滴干活
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      //新建一个三维单位向量 假设z方向就是0.5
      //根据照相机，把这个向量转换到视点坐标系
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);

      //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
      const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
      //射线和模型求交，选中一系列直线
      return raycaster.intersectObjects(target)
    }


    //相机生成方法
    function makeCamera(fov = 40) {
      const aspect = window.innerWidth / window.innerHeight; // 网页全屏
      const zNear = 0.1;
      const zFar = 5000;
      return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
    }


  })

</script>


