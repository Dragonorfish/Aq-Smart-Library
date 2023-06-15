<template>
  <div class="loading_body">
    <div id="pic1" class="pic">
    </div>
    <div id="pic2" class="pic">
    </div>
    <div id="pic3" class="pic"></div>
  </div>
</template>

<script>

</script>

<style scoped>
  .loading_body{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("src/assets/static/bg.png");
  }
  .pic{
    background-repeat: no-repeat;
    background-size: cover;
    width: 25rem;
    height: 25rem;
    position: absolute;
  }
  #pic1{
    background-image: url("https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/aquamanIcon/u1026.png");
    animation: rotate1 10s linear infinite;

  }
  #pic2{
    background-image: url("https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/aquamanIcon/u1066.png");
    animation: rotate2 15s linear infinite;

  }
  #pic3{
    background-image: url("https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/aquamanIcon/u1027.png");
    animation: rotate3 40s linear infinite;

  }
  @keyframes rotate1 {
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
  @keyframes rotate2 {
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(-360deg);}
  }
  @keyframes rotate3 {
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
</style>
