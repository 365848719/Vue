<template>
  <div class="hello">
    <h1 style="color:red">vuex：State测试：{{this.$store.state.count }}</h1>
    <h1 style="color:blue">vuex：Getter测试：{{this.$store.getters.getStateCount }}</h1>

    <h1>vuex：mutations 测试</h1>
    <button @click="add" style="width:150px;height:50px">+</button>
    <br />
    <br />
    <button @click="reduce" style="width:150px;height:50px">-</button>
    <br />
    <br />
    <h1>vuex：Actions 测试</h1>
    <button @click="multi(10)" style="width:150px;height:50px">*</button>

    <h1>{{ msg }}</h1>
    <p>{{myMsg}}</p>
    <h2>你好啊！</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private myMsg!: string;

  add() {
    this.$store.commit("add");
  }

  reduce() {
    this.$store.commit("reduce");
  }

  multi(n: number) {
    this.$store.dispatch("multiAsync", n);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
