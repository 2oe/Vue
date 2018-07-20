<template>
  <div class="Tlist">
    <dl v-for="(item,ind) in toplist" :key="ind">
      <dt>
        <img v-lazy="item.picUrl">
      </dt>
      <dd>
        <h5>{{item.topTitle}}</h5>
        <div v-for="(list,index) in item.songList" :key="index">
          {{index+1}} {{list.songname}} - {{list.singername}}
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {
    getTopList
  } from "api/index.js"
  export default {
    name: "",
    data() {
      return {
        toplist: [],
        itemList: []
      }
    },
    mounted() {
      this._getTopList();
    },
    methods: {
      _getTopList() {
        getTopList().then(res => {
          console.log(res.data.data.topList)
          this.toplist = res.data.data.topList;
          this.itemList = res.data.data.topList.songList;
        })
      }
    }

  }

</script>

<style>
  .Tlist {
    overflow-y: scroll;
    position: absolute;
    top: 90px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    background: #eee;
  }

  .Tlist dl {
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
  }

  .Tlist dl dt {
    flex: 1;
  }

  .Tlist dl dt img {
    width: 100%;
  }

  .Tlist dl dd {
    flex: 3;
    padding-left: 15px;
  }

  .Tlist dl dd h5 {
    padding-top: 5px;
  }

</style>
