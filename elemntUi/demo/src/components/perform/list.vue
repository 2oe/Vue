<template>
  <div>
    this is list
    <p>message from cnp1:{{msg}}</p>
    <cnp1 :solgan="solgan" v-on:sloganEvent="onSloganEvent"></cnp1>
    <cnp2></cnp2>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      solgan: "welcome to china",
      msg: null
    };
  },
  methods: {
    onSloganEvent(val) {
      this.msg = val;
    }
  },
  components: {
    cnp1: {
      name: "cnp1",
      props: ["solgan"],
      data() {
        return {
          tit: "123",
          val: 666
        };
      },
      template: `<div>111
                    {{solgan}}
                    <input type='text' v-model='val'/>
                    <button @click="send">发送</button>
                </div>`,
      methods: {
        send() {
          this.$emit("sloganEvent", this.val);
          EventHub.$emit("hello", this.val);
        }
      }
    },
    cnp2: {
      name: "cnp2",
      data() {
        return {
          tit: "123",
          val: null
        };
      },
      template: `<div>this is val:{{val}}</div>`,
      mounted() {
        EventHub.$on("hello", res => {
          this.val = res;
        });
      }
    }
  }
};
</script>
<style>
</style>
