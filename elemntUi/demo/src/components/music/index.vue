<template>
  <div>
    <heads></heads>
    <section>
      <ol>
        <li>
          <router-link to="/music/recommend">推荐</router-link>
        </li>
        <li>
          <router-link to="/music/toplist">排行榜</router-link>
        </li>
        <li>
          <router-link to="/music/search">搜索</router-link>
        </li>
      </ol>
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
  import heads from "../include/heads.vue";
  export default {
    name: "music",
    data() {
      return {}
    },
    components: {
      heads
    }
  }

</script>

<style scope>
  header {
    background: #31c27c;
  }


  ol {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 1px;
    border-bottom: 1px solid #ccc;
  }

  ol li {
    flex: 1;
    text-align: center;
  }

  a:hover {
    text-decoration: none;
    color: #31c27c;
  }

  ol li a {
    color: rgba(0, 0, 0, .6);
    line-height: 44px;
    display: inline-block;
  }

  .router-link-active {
    width: 100%;
    border-bottom: 3px solid #31c27c;
    color: #31c27c;
  }

</style>
