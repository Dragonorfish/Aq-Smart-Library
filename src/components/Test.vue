<template>
    <div class="test_view">
        <div class="paper_body">
            <h1 id="part_title">{{currentPart.title}}</h1>
            <div class="question_item" v-for="item in currentPart.children" :key="item.id">
                <choiceQuestion
                        v-if="item.type===1"
                        :questionBody="item.questionBody"
                        :questionChoice="item.questionChoice"
                        :questionId="item.id"
                        :questionImgs="item.questionImg"
                        :isCommit="currentPart.isCommit"
                        @getAnswer="getAnswer"
                ></choiceQuestion>
                <Completion
                        v-if="item.type===2"
                        :questionBody="item.questionBody"
                        :text="item.text"
                        :questionId="item.id"
                        :isCommit="currentPart.isCommit"
                        @getAnswer="getAnswer"
                ></Completion>
            </div>
            <div class="action_footer">
                <button class="action_button" v-show="currentPartIndex>0" @click="prePart">上一章节</button>
                <button class="action_button" style="background-color: #e6a23c;border: 2px solid #e6a23c;"
                        v-if="!currentPart.isCommit"
                        @click="submitQuestion"
                >
                    提交本章节
                </button>
                <div class="is_commit_sign" v-if="currentPart.isCommit">本章节已提交</div>
                <button class="action_button" v-show="currentPartIndex<3" @click="nextPart">下一章节</button>
            </div>
        </div>
        <confirmAlert v-if="confirmIsOpen" :confirmMessage=message @callBack="confirmCommit"></confirmAlert>
    </div>
</template>

<style scoped>
    h1{
        color: whitesmoke;
        margin: 3rem;
    }
    .test_view{
        width: 100%;
        height: 100%;
    }
    .paper_body{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0B4252;
        width: 100%;
        height: 100%;
        overflow: auto;
        position: absolute;
    }
    .question_item{
        width: 800px;
        margin-top: 2rem;
    }
    .action_footer{
        margin-top: 5rem;
        margin-bottom: 10rem;
        height: 10rem;
        display: flex;
        width: 800px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .action_button{
        width: 9rem;
        height: 4rem;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px;
        opacity: 0.8;
        background-color: #00a4a2;
        color: whitesmoke;
        border: 2px solid #00a4a2;
    }
    .action_button:hover{
        opacity: 1;
        border: 2px solid aquamarine;
    }
    .is_commit_sign{
        font-size: 20px;
        color: whitesmoke;
        font-weight: 900;
        font-family:"宋体" ;
        font-style: italic;
    }
</style>

<script setup>
  import { useUserStore } from "../stores/modules/userStore";
  import {ref} from "vue"
  const questionStore=useUserStore().questions;
  const questionAnswers=useUserStore().questionAnswers
  const currentPartIndex=ref(0);
  const currentPart=ref(questionStore[currentPartIndex.value]);
  const confirmIsOpen=ref(false)
  const message="提交后答案将不可更改，您确认吗？"

  function getAnswer(answer) {
    questionAnswers.set(answer[0],answer[1]);
  }
  function submitQuestion() {
    confirmIsOpen.value=true;
  }
  function confirmCommit(status) {
    if (status){
      currentPart.value.isCommit=true;
    }
    confirmIsOpen.value=false;
  }
  function prePart() {
    currentPartIndex.value-=1;
    currentPart.value=questionStore[currentPartIndex.value];
    window.location.hash= '';
    window.location.hash= '#part_title';
  }
  function nextPart() {
    currentPartIndex.value+=1;
    currentPart.value=questionStore[currentPartIndex.value];
    window.location.hash= '';
    window.location.hash= '#part_title';
  }
</script>
