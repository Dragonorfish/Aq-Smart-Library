<template>
    <div class="map_body" tabindex="2">
        <canvas class="map_bg" id="map_bg" width="1000" height="600"></canvas>
    </div>
</template>

<style scoped>
    .map_body{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: appear ease-out 0.5s;
    }
    @keyframes appear {
        0%{opacity: 0}
        100%{opacity: 1}
    }
    .map_bg{
        background-image: url("src/assets/static/MoShanMap.jpg");
        background-size: cover;
        border: 5px solid #00a4a2;
        border-radius: 10px;
    }
</style>

<script setup>
  import { onMounted, ref} from "vue";
    let rotateZ=0;
    onMounted(()=>{
      const canvas=document.getElementById("map_bg")
      const context=canvas.getContext('2d');
      context.clearRect(0,0, canvas.width, canvas.height);
      const mapBody=document.getElementsByClassName("map_body")[0];

      mapBody.addEventListener("keydown",rotateMap);


      //地图旋转
      function rotateMap(e) {
        switch (e.keyCode) {
          case 37:
            rotateZ-=1
            if (rotateZ<=-360){
              rotateZ=0;
            }
            canvas.style.transform='rotateZ('+rotateZ+'deg)';
            break;
          case 39:
            rotateZ+=1;
            if (rotateZ>=360){
              rotateZ=0;
            }
            canvas.style.transform='rotateZ('+rotateZ+'deg)';
            break;
        }
      }

      //画线
      function drawLine(start,end) {
        canvas.moveTo(start.x, start.y)
        canvas.lineTo(end.x, end.y)
        canvas.stroke()
      }

      //点击事件
      function clickEvent(e) {

      }
    })

</script>

