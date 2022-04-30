<template>
  <div>
    <h1>계산기</h1>
    <p>계산기 페이지입니다.</p>

    <div class="calc-body">
        <div class="result">{{calcResult}}</div>
        <div class="button-area-wrap flex-center-sort">
            <div class="button-body-wrap">
                <span v-for="(btn, i) in buttonList" :key="i">
                  <!-- <div :class="btn.class" :id="btn.id"><button>{{btn.value}}</button></div> -->
                  <button :class="btn.class" :id="btn.id" @click='checkVal(btn.value)'>{{btn.value}}</button>
                </span>
            </div>
        </div>
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

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['buttonList']),
    ...mapGetters(['calcResult']),
    ...mapMutations(['checkBtn']),
  },
  methods: {
    checkVal(value) {
      // this.checkBtn(value);
      // console.log(value);
    }
  }
}
</script>

<style>
  .calc-body {
    width: 300px;
    height: 460px;
    margin: 0 auto;
    border: 1px solid #000;
    border-radius: 8px;
    background: #000;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  .result {
    text-align: right;
    padding: 24px;
    padding-bottom: 0px;
    color: #fff;
    font-size: 44px;
  }
  .button-area-wrap {
    width: 100%;
    height: 350px;
  }
  .button-body-wrap {
    width: 280px;
    height: 100%;
    margin: 0 auto;
  }
  #zeroBtn {
    width: 120px;
    height: 50px;
  }
  .topBtn {
    color: #000;
    background-color: #a6a6a6;
  }
  .oprBtn {
    color: #fff;
    background-color: #f98000;
  }
  button {
    margin: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #333333;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 500;
    transition: 0.3s;
  }
  button:hover {
    transform: scale(1.05);
  }
</style>