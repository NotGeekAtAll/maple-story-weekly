<template>
  <div class="midnight-wrapper">
    <div class="midnight-container">
      <div class="drag-container the-container">
        <div class="drag-box dropzone" v-for="n in 9">
          <div class="drag-item" :style="{ backgroundImage: `url(/midnight/${n}.png)` }">
          </div>
        </div>
      </div>
      <div class="drop-container the-container">
        <div class="drop-item dropzone" v-for="n in 9"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Droppable } from '@shopify/draggable';
import { onMounted, ref } from 'vue';


onMounted(() => {
  const droppable = new Droppable(document.querySelectorAll('.the-container'), {
    draggable: '.drag-item',
    dropzone: '.dropzone',
    mirror: {
      constrainDimensions: true,
    },
  });
})
</script>

<style lang="less" scoped>
@dragWidth: 40px;
@dropWidth: 66px;
@dropContainerSize: @dropWidth * 3.2;


.midnight-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .midnight-container {
    width: 260px;
  }
}

.drag-container {
  display: flex;
  flex-wrap: wrap;
}

.drag-box {
  width: @dragWidth;
  height: @dragWidth;
  margin: 4px;
  border: 1px solid lightgray;
  box-sizing: border-box;
}

.drag-item {
  width: @dragWidth;
  height: @dragWidth;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.drop-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: @dropContainerSize;
  height: @dropContainerSize;

  .drop-item {
    width: @dropWidth;
    height: @dropWidth;
    border: 1px solid #333;

    .drag-item {
      width: @dropWidth;
      height: @dropWidth;
    }
  }
}
</style>