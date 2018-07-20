<template>
  <div class="list">
    <div>
      <el-carousel :interval="3000" height="131px">
        <el-carousel-item v-for="(item,ind) in bannerList" :key="ind">
          <img class="img_res" :src="item.picUrl">
        </el-carousel-item>
      </el-carousel>
      <ul>
        <li v-for="(list,idx) in recommendList" :key="idx">
          <router-link :to="{path:'/music/detail',query:{id:list.data.albummid}}">
            <dl>
              <dt>
                <img v-lazy="`http://y.gtimg.cn/music/photo_new/T002R300x300M000${list.data.albummid}.jpg?max_age=2592000`" alt="">
              </dt>
              <dd>
                <h5 v-text="list.data.albumname"></h5>
                <p>
                  <span v-for="(item,index) in list.data.singer" v-text="item.name" :key="index"></span>
                </p>
              </dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import bScroll from "better-scroll";
  import {
    getCarouselList
  } from "api/index.js"
  import {
    getrecommendList
  } from "api/recommend.js"
  export default {
    name: "",
    data() {
      return {
        bannerList: [],
        recommendList: []
      }
    },
    mounted() {
      this._getCarousel();
      this._getrecommendList();

    },
    methods: {
      _getCarousel() {
        getCarouselList().then(res => {
          this.bannerList = res.data.data.slider;
        });
      },
      _getrecommendList() {
        getrecommendList().then(res => {
          console.log(res.songlist)
          this.recommendList = res.songlist;
        })
      }
    }
  }

</script>

<style scoped>
  .list {
    overflow-y: scroll;
    position: absolute;
    top: 90px;
    bottom: 0;
  }

  ul {
    width: 100%;
    padding: 15px;
  }

  ul li {
    width: 100%;
  }

  ul li dl {
    width: 100%;
    display: flex;
  }

  ul li dl dt {
    flex: 1;
  }

  ul li dl dt img {
    width: 100%;
  }

  ul li dl dd {
    flex: 3;
    padding-left: 15px;
    padding-top: 10px;
  }

  ul li dl dd p span {
    margin-left: 5px;
  }

</style>
