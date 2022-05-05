<template>
  <div class="todolist">
    <v-container class="grey lighten-5">
      <v-row id="firstRow" no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-card  class="pa-2" outlined tile>
            목록
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            삭제
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters v-for="(item, i) in getTodolist" :key="i" >
        <v-col cols="12" sm="6" md="8">
          <v-card  class="pa-2" outlined tile>
            {{ item.todo }}
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <button class="delBtn" :value="i" @click="delTodo">Delete</button>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTodolist']),
  },
  methods: {
    delTodo(event) {
      this.$store.commit('delTodo', event.target.value);
    }
  }
}
</script>

<style>
  #firstRow {
    text-align: center;
  }
  .delBtn {
    width: 80px;
    background: rgb(218, 19, 19);
    color: #fff;
  }
</style>
