<template>
    <div id="footer">
        <p style="font-size: 14px;">Copyright © 2022 - 2023 海王汇智</p>
        <div>
            <a target="_blank" class="link" style="color: gainsboro" href="https://beian.miit.gov.cn/">黑ICP备2022009434号-1</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>

<style scoped>
    #footer{
        width:100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-top: 5px solid #0B4252;
        bottom: 0px;
        position: relative;
    }
    #footer p{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        color: gainsboro;

    }
    #footer div{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
    }
    .link{
        text-decoration: transparent;
    }
    .link:hover{
        color:aqua;
    }

</style>
