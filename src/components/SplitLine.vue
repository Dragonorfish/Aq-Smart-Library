<template>
  <div class="split_line" >
    <div class="line_appear" id="left"></div>
    <div class="line"></div>
    <img src="../assets/static/weblogo.png">
    <div class="line"></div>
    <div class="line_appear" id="right"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  img{
      object-fit: cover;
      width: 40px;
      height: 40px;
      opacity: 0.8;
      margin-left: 0.75rem;
    margin-right: 0.75rem;
    }
  .split_line{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .line{
    width: 25%;
    height: 3px;
    background-color: gray;
  }
  .line_appear{
    width: 15%;
    height: 3px;

  }
  #left{
    background-image: linear-gradient(to right,transparent,gray);
  }
  #right{
    background-image: linear-gradient(to left,transparent,gray);
  }
</style>
