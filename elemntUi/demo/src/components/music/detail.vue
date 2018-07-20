<template>
  <div class="detilOne">
    <div class="Item">
      <img :src="`//y.gtimg.cn/music/photo_new/T002R300x300M000${$route.query.id}.jpg?max_age=2592000`">
      <h4 v-text="dataList.name"></h4>
      <p v-text="dataList.desc"></p>
    </div>
  </div>
</template>

<script>
  import {
    getrecommendDetail
  } from "api/recommend.js"
  export default {
    name: "",
    data() {
      return {
        dataList: []
      }
    },
    mounted() {
      this._getrecommendDetail();
    },
    methods: {
      _getrecommendDetail() {
        getrecommendDetail(this.$route.query.id).then(res => {
          this.dataList = res.data;
        })
      }
    }
  }

</script>

<style scoped>
  .Item {
    padding: 15px;
  }

  .detilOne {
    overflow-y: scroll;
    position: absolute;
    top: 90px;
    bottom: 0;
  }

  h4 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  p {
    width: 100%;
    text-align: center;
  }

</style>
