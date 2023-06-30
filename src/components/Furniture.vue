<template>
  <div class="grid">
    <div class="grid__container">
      <div class="grid__element" v-for="n in 9" :style="{backgroundImage: `url(/midnight/${n}.png)`}">
        <!-- <img :src="`/midnight/${n}.png`"> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swappable } from '@shopify/draggable';
import { onMounted } from 'vue';


onMounted(() => {
  const swappable = new Swappable(document.querySelectorAll('.grid__container'), {
  draggable: '.grid__element'
});
})
</script>

<style lang="less" scoped>
.grid {

  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__element {
    width: 31vw;
    height: 31vh;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.draggable-mirror {
  z-index: 1000;
  color: #969696;
}
</style>