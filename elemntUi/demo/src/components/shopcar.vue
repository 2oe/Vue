<template>
  <div class="wrap">
    <heads>购物车</heads>
    <section>
      <div class="scroll_wrap">
        <div>
          <div class="pl15 pt10 middle">
            <input type="checkbox" id="checkAllItem" v-model="checkAllItem" @change="checkAll">
            <label for="checkAllItem">全选</label>
          </div>
          <lists :productList="productList" @update="onUpdate"></lists>
        </div>
      </div>
      <div class="computer">
        <span>合计数量:{{sum}}</span>
        <span>合计金额：{{total}}</span>
      </div>
    </section>
  </div>
</template>

<script>
  import heads from "view/include/heads.vue";
  import lists from "view/include/lists.vue";
  import bScroll from "better-scroll";
  import {
    getProductList
  } from "api/shopcar.js";
  export default {
    name: "",
    data() {
      return {
        checkAllItem: false,
        productList: [],
        sum: 0,
        total: 0
      };
    },
    components: {
      heads,
      lists
    },
    mounted() {
      this._getProductList();
      new bScroll("section", {
        click: true
      });
    },
    methods: {
      onUpdate() {
        let temp = [];
        this.productList.map(item => {
          if (item.isCheck) {
            temp.push(item);
          }
        });
        if ((temp.length == this.productList.length)) {
          this.checkAllItem = true;
        } else {
          this.checkAllItem = false;
        }
        this.computer();
      },
      checkAll() {
        this.productList.map(item => {
          item.isCheck = this.checkAllItem;
        });
        this.computer();

      },
      _getProductList() {
        getProductList().then(res => {
          this.productList = res.data;
          this.computer();
        });
      },
      computer() {
        let sum1 = 0;
        let tot = 0;
        this.productList.map(item => {
          if (item.isCheck) {
            sum1 += item.count;
            tot += item.count * item.price;
          }
        });
        this.sum = sum1;
        this.total = tot;
      }
    }
  };

</script>

<style scoped>
  .middle {
    border-bottom: 1px solid #ccc;
    vertical-align: sub;
  }

  section {
    padding-bottom: 20px;
  }

  .computer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background: #fba716;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    color: #fff;
    align-items: center;
  }

</style>
