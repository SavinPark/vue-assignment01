<template>
  <div>
    <h1>투두리스트</h1>
    <p>투두리스트 페이지입니다.</p>

    <ShowTodosView class="showTodos"></ShowTodosView>
    <AddTodosView class="addTodos"></AddTodosView>
  </div>
</template>

<script>
  import ShowTodosView from './ShowTodosView.vue';
  import AddTodosView from './AddTodosView.vue';

  export default {
    components: {
      ShowTodosView,
      AddTodosView,
    },
  }
</script>

<style>
  .showTodos {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .addTodos {
    margin-left: 70px;
  }
</style>