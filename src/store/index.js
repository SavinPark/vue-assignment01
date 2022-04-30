import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: '',
    buttonList: [
      { value: 'AC', class: 'topBtn', id: 'resetBtn' },
      { value: '+/-', class: 'topBtn', id: 'plusMinusBtn' },
      { value: '%', class: 'topBtn', id: 'percentBtn' },
      { value: '÷', class: 'oprBtn', id: 'divisionBtn' },
      { value: 7, class: 'numBtn', id: 'sevenBtn' },
      { value: 8, class: 'numBtn', id: 'eightBtn' },
      { value: 9, class: 'numBtn', id: 'nineBtn'},
      { value: 'x', class: 'oprBtn', id: 'multiplyBtn' },
      { value: 4, class: 'numBtn', id: 'fourBtn' },
      { value: 5, class: 'numBtn', id: 'fiveBtn' },
      { value: 6, class: 'numBtn', id: 'sixBtn' },
      { value: '-', class: 'oprBtn', id: 'minusBtn' },
      { value: 1, class: 'numBtn', id: 'oneBtn' },
      { value: 2, class: 'numBtn', id: 'twoBtn' },
      { value: 3, class: 'numBtn', id: 'threeBtn' },
      { value: '+', class: 'oprBtn', id: 'plusBtn' },
      { value: 0, class: 'numBtn', id: 'zeroBtn' },
      { value: '.', class: 'numBtn', id: 'dotBtn' },
      { value: '=', class: 'oprBtn', id: 'equalBtn' },
    ],
  },
  getters: {
    calcResult(state) {
      return state.result;
    },
  },
  mutations: {
    checkBtn(state, value) {
      state.result = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
