<template>
  <div>
    <input class="val" id="val01" type="text" placeholder="value 1" @input="inputVal01">
    <input class="val" id="val02" type="text" placeholder="value 2" @input="inputVal02">
    <div class="operators">
      <button class="oprtBtn" @click="operation" value="+">+</button>
      <button class="oprtBtn" @click="operation" value="-">-</button>
      <button class="oprtBtn" @click="operation" value="*">x</button>
      <button class="oprtBtn" @click="operation" value="/">/</button>
    </div>
    <div>
      <button class="resetBtn" @click="reset">Reset</button>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getVal01', 'getVal02', 'getResult']),
  },
  methods: {
    inputVal01(event) {
      this.$store.commit('setVal01', event.target.value);
    },
    inputVal02(event) {
      this.$store.commit('setVal02', event.target.value);
    },
    reset() {
      this.$store.commit('setVal01', '');
      this.$store.commit('setVal02', '');
      this.$store.commit('setOperator', '');
      this.$store.commit('setResult', '');
      document.getElementById('val01').value = null;
      document.getElementById('val02').value = null;
    },
    operation(event) {
      switch(event.target.value) {
        case '+' :
          // alert(parseInt(this.getVal01) + parseInt(this.getVal02));
          this.$store.commit('setOperator', '+');
          this.$store.commit('setResult', parseInt(this.getVal01) + parseInt(this.getVal02));
          break;
        case '-' :
          this.$store.commit('setOperator', '-');
          this.$store.commit('setResult', parseInt(this.getVal01) - parseInt(this.getVal02));
          break;
        case '*' :
          this.$store.commit('setOperator', '*');
          this.$store.commit('setResult', parseInt(this.getVal01) * parseInt(this.getVal02));
          break;
        case '/' :
          this.$store.commit('setOperator', '/');
          this.$store.commit('setResult', parseInt(this.getVal01) / parseInt(this.getVal02));
          break;
      }
    },
  }
 
}
</script>

<style>
  .operators {
    margin-top: 20px;
  }
  .oprtBtn {
    width: 40px;
    height: 40px;
    margin: 10px;
    background: rgb(19, 19, 177);
    color: #fff;
  }
  .resetBtn {
    width: 80px;
    height: 40px;
    margin: 10px;
    background: rgb(218, 19, 19);
    color: #fff;
  }
</style>