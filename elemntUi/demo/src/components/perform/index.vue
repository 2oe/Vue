<template>
  <div class="wrap">
    <heads></heads>
    <section>
      <el-carousel :interval="3000" height="131px">
        <el-carousel-item v-for="(item,ind) in bannerList" :key="ind">
          <img class="img_res" :src="item.picUrl">
        </el-carousel-item>
      </el-carousel>
      <div class="listShow">
        <dl v-for="(item,idx) in hotPerform" :key="idx">
          <dt>
            <img v-lazy="item.star_logo">
          </dt>
          <dd>
            <h6>{{item.show_name}}</h6>
            <p>
              <i class="iconfont icon-shizhong1"></i>{{item.show_time}}</p>
            <p>
              <i class="iconfont icon-dingwei"></i>{{item.hall_name}}</p>
            <p>{{item.min_price}}-{{item.max_price}}元</p>
          </dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    getCarouselList,
    getHotPerform
  } from "api/index.js";
  import heads from "view/include/heads.vue"
  export default {
    name: "App",
    data() {
      return {
        bannerList: [],
        hotPerform: []
      };
    },
    mounted() {
      this._getCarousel(),
        this._getHotPerform();
    },
    methods: {
      _getCarousel() {
        getCarouselList().then(res => {
          console.log(res.data.data.slider);
          this.bannerList = res.data.data.slider;
        });
      },
      _getHotPerform() {
        getHotPerform().then(res => {
          console.log(res.data.data);
          this.hotPerform = res.data.data;
        });
      }
    },
    components: {
      heads
    }
  };

</script>

<style scoped>
  section {

    overflow: hidden;
    overflow-y: auto;
  }

</style>
