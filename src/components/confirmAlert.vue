
<template>
    <div class="confirm_message">
        <div class="cover"></div>
        <div class="confirm_body">
            <div class="message">{{props.confirmMessage}}</div>
            <div class="action_btns">
                <button id="cancel" @click="callBack(false)">取消</button>
                <button id="confirm" @click="callBack(true)">确认</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .confirm_message{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 9999;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.5;
    }
    .confirm_body{
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 50%;
        right: 50%;
        transform: translateY(-50%) translateX(50%);
        background-color: teal;
        border-radius: 20px;
        box-shadow: #0B4252 0px 0px 20px 5px;
        animation: ease-out 0.3s appearFromBottom;
    }
    .message{
        width: 300px;
        height: 200px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: whitesmoke;
        font-weight: 600;
        border-radius: 15px;
        background-color: #0B4252;
    }
    .action_btns{
        margin: 10px 20px 10px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .action_btns button{
        width: 7rem;
        height: 3rem;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px;
        opacity: 0.8;
        color: whitesmoke;
        border: 2px solid #00a4a2;
    }
    #cancel{
        background-color: #e6a23c;
    }
    #confirm{
        background-color: #00a4a2;
    }
    .action_btns button:hover{
        opacity: 1;
        border: 2px solid aquamarine;
    }
    @keyframes appearFromBottom {
        0%{
            top: 100%;
        }
        100%{
            top: 50%;
        }
    }
</style>

<script setup>
    const props=defineProps({
      confirmMessage:{type:[String],default:"你确认吗"}
    })
    const emits=defineEmits(["callBack"]);
    console.log(props.confirmMessage)
    function callBack(status) {
      emits("callBack",status);
    }
</script>

