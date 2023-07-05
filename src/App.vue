<template>
  <div class="container">
    <div class="island-wrapper">
      <div class="img-box" @click="setActiveIndex(1)">
        <img class="response-img" src="@/assets/images/3.png" alt="">
      </div>
      <div class="img-box" @click="setActiveIndex(2)">
        <img class="response-img" src="@/assets/images/2.png" alt="">
      </div>
      <div class="img-box" @click="setActiveIndex(3)">
        <img class="response-img" src="@/assets/images/6.png" alt="">
      </div>
    </div>
    <div class="content-wrapper">
      <mid-night-chaser v-show="curIndex === 1" />
      <img class="response-img" src="@/assets/images/receipe.jpg" alt="" v-show="curIndex === 2">
      <img class="response-img" src="@/assets/images/pao.jpg" alt="" v-show="curIndex === 3">
    </div>
  </div>
</template>

<script setup lang="ts">
import MidNightChaser from '@/components/midnight-chaser/index.vue'
import { ref } from 'vue'

const curIndex = ref(1)

function setActiveIndex(i: number) {
  curIndex.value = i
}

</script>

<style lang="less">
.container {
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
}

.island-wrapper {
  display: flex;
  padding: 20px;

  .img-box {
    overflow: hidden;
    width: 88px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid lightgray;
    box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.5s;

    &:active {
      box-shadow: 1px 2px 4px 7px rgba(0, 0, 0, 0.4);
    }
  }
}

.response-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.img-box+.img-box {
  margin-left: 20px;
}
</style>
