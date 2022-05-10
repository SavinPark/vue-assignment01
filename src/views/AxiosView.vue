<template>
  <div>
    <h1>Axios</h1>

    <div class="search">
      <select class="search-item" v-model="type">
        <option value="1">웹문서</option>
        <option value="2">이미지</option>
        <option value="3">동영상</option>
      </select>
  
      <input class="search-item" type="text" v-model="search" @keyup.enter="callData">
      <button class="search-item" @click="callData">검색</button>
    </div>

    <!-- 웹 문서 검색 -->
    <div v-if="type == 1">
      <table>
        <tr>
          <th>제목</th>
          <th>내용</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <a :href="item.url" target='_blank'>
              <span v-html="item.title"></span>
            </a>
          </td>
          <td>
            <span v-html="item.contents"></span>
          </td>
        </tr>
      </table>
    </div>

    <!-- 이미지 검색 -->
    <div v-else-if="type == 2">
      <table>
        <tr>
          <th>제목</th>
          <th>이미지</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <a :href="item.doc_url" target='_blank'>
              {{item.display_sitename}}
            </a>
          </td>
          <td>
            <img :src="item.thumbnail_url">
          </td>
          <td>
            <img :src="item.thumbnail">
          </td>
        </tr>
      </table>
    </div>

    <!-- 동영상 검색 -->
    <div v-else-if="type == 3">
      <table>
        <tr>
          <th>No</th>
          <th>Video</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{index + 1}}</td>
          <td>
            <a :href="item.url" target='_blank'>
              <img :src="item.thumbnail" :alt="item.title">
            </a>
            <p>{{item.title}}</p>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data: () => ({
      type: '1',
      search: '',
      list: []
    }),
    methods: {
      callData() {
        switch (this.type) {
          case '1':
            this.callWebDoc();
            break;
          case '2':
            this.callImg();
            break;
          case '3':
            this.callVideo();
            break;
        }
      },
      callWebDoc() {
        axios.get(`https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=recency`, {
          headers: {
            Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
          }
        }).then(response => {
          this.list = response.data.documents;
        }).catch(error => {
          console.error(error);
        });
      },
      callImg() {
        axios.get(`https://dapi.kakao.com/v2/search/image?query=${this.search}&page=1&size=10&sort=recency`, {
          headers: {
            Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
          }
        }).then(response => {
          this.list = response.data.documents;
        }).catch(error => {
          console.error(error);
        });
      },
      callVideo() {
        axios.get(`https://dapi.kakao.com/v2/search/vclip?query=${this.search}&page=1&size=10&sort=recency`, {
          headers: {
            Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
          }
        }).then(response => {
          this.list = response.data.documents;
        }).catch(error => {
          console.error(error);
        });
      },
    }
  }
</script>

<style scoped>
  .search {
    margin: 40px 0;
  }
  .search-item {
    margin-right: 40px;
  }
  select {
    box-sizing: border-box;
    width: 80px;
    height: 30px;
    padding: 5px;
    text-align-last: center;
    border: 1px solid #000;
  }
  input {
    height: 30px;
    border: 1px solid #000;
  }
  button {
    width: 70px;
    height: 30px;
    border-radius: 5px;
    background-color: rgb(33, 11, 144);
    color: #fff;
  }
  th, td {
    border: 1px solid #eee;
  }
</style>