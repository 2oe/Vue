<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
  export default {
    name: "App"
  };

</script>

<style>
  @import url("./bootstrap/css/bootstrap.min.css");
  @import url("./css/index.css");
  @import url("element-ui/lib/theme-chalk/index.css");
  @import url("./css/animate.css");

</style>
