<template>
  <div>
    <input id="inputTodo" type="text" placeholder="할 일을 입력하세요">
    <button id="addBtn" @click="addTodo">ADD</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', document.getElementById('inputTodo').value);
      document.getElementById('inputTodo').value = null;
    }
  }
}
</script>

<style>
  #inputTodo {
    width: 700px;
    margin-right: 20px;
    padding: 5px;
    border: 1px solid rgb(97, 97, 97);
    border-radius: 5px;
  }
  #addBtn {
    width: 80px;
    height: 40px;
    margin: 10px;
    background: purple;
    color: #fff;
  }
</style>