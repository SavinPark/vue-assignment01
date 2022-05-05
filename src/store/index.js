import Vue from 'vue'
import Vuex from 'vuex'
import CalcAuth from './module/CalcAuth'
import TodoAuth from './module/TodoAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // val01: '',
    // val02: '',
    // operator: '',
    // result: '',
  },
  getters: {
    // getVal01(state) {
    //   return state.val01;
    // },
    // getVal02(state) {
    //   return state.val02;
    // },
    // getOperator(state) {
    //   return state.operator;
    // },
    // getResult(state) {
    //   return state.result;
    // }
  },
  mutations: {
    // setVal01(state, value) {
    //   state.val01 = value;
    // },
    // setVal02(state, value) {
    //   state.val02 = value;
    // },
    // setOperator(state, value) {
    //   state.operator = value;
    // },
    // setResult(state, value) {
    //   state.result = value;
    // }
  },
  actions: {
  },
  modules: {
    CalcAuth,
    TodoAuth,
  }
})
