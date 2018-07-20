<template>
  <div>
    <div class="list" v-for="(item,ind) in productList" :key="ind">
      <input type="checkbox" v-model="item.isCheck" @change="checkItem">
      <dl>
        <dt>
          <img v-lazy="item.pic_url">
        </dt>
        <dd>
          <ul>
            <li>{{item.name}}</li>
            <li>{{item.discribe}}</li>
            <li>${{item.price}}元</li>
            <li>
              <span @click="minus(ind)">-</span>
              <span v-text="item.count"></span>
              <span @click="plus(ind)">+</span>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: {
      productList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {};
    },
    methods: {
      minus(index) {
        if (this.productList[index].count < 1) {
          return;
        }
        this.productList[index].count--;
        this.$emit('update');
      },
      plus(index) {
        this.productList[index].count++;
        this.$emit('update');
      },
      checkItem() {
        this.$emit("update");
      }
    }
  };

</script>

<style>
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px dashed #ccc;
  }

  .list>input {
    flex: 0.5;
  }

  .list dl {
    flex: 6;
    display: flex;
    align-items: center;
  }

  .list dl dt img {
    width: 100px;
  }

  .list dl dd ul {
    flex: 3;
    padding-left: 10px;
  }

  .list dl dd ul li {
    width: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .list dl dd ul li span {
    border: 1px solid #ccc;
    display: inline-block;
    width: 25px;
    height: 25px;
    text-align: center;
  }

</style>
