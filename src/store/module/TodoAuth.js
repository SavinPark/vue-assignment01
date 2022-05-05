export default {
  namespace: true,

  state: {
    todolist: [
      {todo: 'Vue.js 과제하기'},
      {todo: '코딩테스트 문제 풀이'},
      {todo: '책 읽기'},
    ],
  },
  getters: {
    getTest(state) {
      return state.test;
    },
    getTodolist(state) {
      return state.todolist;
    },
  },
  mutations: {
    addTodo(state, value) {
      state.todolist.push({todo: value});

    },
    delTodo(state, value) {
      state.todolist.splice(value, 1);
    },
  },
  actions: {
  },
}