<template>
  <form action="">
    <input class="inputTodo" type="text" placeholder="할 일을 입력하세요">
    <button class="addBtn" @click="addTodo">ADD</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
  },
  methods: {
    addTodo(event) {
      // this.$store.dispatch('addTodo', event.target.value);
      this.$store.commit('addTodo', event.target.value);
    }
    // ...mapActions(['addTodo']),
  }
}
</script>

<style>
  .inputTodo {
    width: 700px;
    margin-right: 20px;
    padding: 5px;
    border: 1px solid rgb(97, 97, 97);
    border-radius: 5px;
  }
  .addBtn {
    width: 80px;
    height: 40px;
    margin: 10px;
    background: purple;
    color: #fff;
  }
</style>