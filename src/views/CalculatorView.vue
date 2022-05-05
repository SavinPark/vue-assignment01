<template>
  <div>
    <h1>계산기</h1>
    <p>계산기 페이지입니다.</p>
    <div class="calculator">
      <PanelView class="panel"></PanelView>
      <ControllerView class="controller"></ControllerView>
    </div>
  </div>
</template>


<script>
// [ Todolist ]
// https://www.heecheolman.dev/post/%EC%9E%91%EC%97%85%EB%AC%BC-vue%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B3%84%EC%82%B0%EA%B8%B0/

// [ Icons ]
// https://pictogrammers.github.io/@mdi/font/2.0.46/

// [ Vue.js VS React ]
// https://imagineu.tistory.com/70

import PanelView from './PanelView.vue';
import ControllerView from './ControllerView.vue';

export default {
  components: {
    PanelView,
    ControllerView,
  },
}
</script>

<style>
  .calculator {
    margin-top: 80px;
  }
  .panel {
     margin-bottom: 60px;
  }
</style>