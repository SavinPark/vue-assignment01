<template>
  <div>
    <p>연산 : {{ getVal01 }} {{ getOperator }} {{ getVal02 }}</p>
    <p>결과 : {{ getResult }}</p>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getVal01', 'getVal02', 'getOperator', 'getResult']),
  }, 
}
</script>

<style>
  input {
    margin-right: 20px;
    padding: 5px;
    border: 1px solid rgb(97, 97, 97);
    border-radius: 5px;
  }
</style>