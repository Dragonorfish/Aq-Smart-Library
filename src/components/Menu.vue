<template>
    <div class="bg_cover">
    </div>
    <div class="menu_list">
        <div class="title">暂停中</div>
        <div class="menu_item" @click="changePersonPerspective">切换人称视角</div>
        <div class="menu_item">更改灵敏度</div>
        <div class="menu_item">帮助</div>
        <div class="menu_item" @click="returnGame">返回游戏</div>
    </div>
</template>

<script setup>
    const emit=defineEmits(["menuItemEvent"])
    function changePersonPerspective() {
        emit("menuItemEvent",1)
    }
    function returnGame() {
        emit("menuItemEvent",4)
    }
</script>

<style scoped>
    .bg_cover{
        width: 100%;
        height: 100%;
        background-color: #0B4252;
        opacity: 0.5;
        position: absolute;
    }
    .menu_list{
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        animation: appear ease-out 1s;
    }
    @keyframes appear {
        0%{opacity: 0}
        100%{opacity: 1}
    }
    .title{
        font-size: 40px;
        color: aquamarine;
        z-index: 10;
        font-weight: 900;
        margin: 20px;
    }
    .menu_item{
        width: 250px;
        height: 60px;
        font-size: 26px;
        color: whitesmoke;
        font-weight: 600;
        background-color: darkcyan;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow:0px 0px 10px 0px #00a4a2;
        margin: 1rem;
        z-index: 10;
    }
</style>
