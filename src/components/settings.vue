<template lang="pug">
    .content(@click="isShow()")
       .list
          .itemList
              .itemTitle 字体
              .option
                  button(@click="fontSize('smallFont')" :class="{'active':this.$store.state.fontSize=='smallFont'}") 小
                  button(@click="fontSize('middleFont')" :class="{'active':this.$store.state.fontSize=='middleFont'}") 中
                  button(@click="fontSize('bigFont')" :class="{'active':this.$store.state.fontSize=='bigFont'}") 大
          .itemList
              .itemTitle 背景
              .option.colorList
                  .white(@click="backgroundColor('white')" :class="{'active':this.$store.state.backgroundColor=='white'}")
                  .pink(@click="backgroundColor('pink')" :class="{'active':this.$store.state.backgroundColor=='pink'}")
                  .yellow(@click="backgroundColor('yellow')" :class="{'active':this.$store.state.backgroundColor=='yellow'}")
                  .green(@click="backgroundColor('green')" :class="{'active':this.$store.state.backgroundColor=='green'}")
          .itemList
              .itemTitle 阅读模式
              img(src='../assets/daytime.png' @click="isNight('night')" v-if="this.$store.state.isNight=='byDay'")
              img(src='../assets/night.png' @click="isNight('byDay')" v-if="this.$store.state.isNight=='night'")
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    isShow() {
      this.$parent.setPattern(0)
    },
    fontSize(str){
      this.$store.commit("setFontSize",str);
    },
    backgroundColor(str){
      this.$store.commit("setBackgroundColor",str);
    },
    isNight(str){
      this.$store.commit("setIsNight",str);
    }
  }
};
</script>
<style scoped>
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
}
.list {
  position: fixed;
  bottom: -0.1rem;
  height: 3rem;
  background-color: #ffffff;
  width: 100%;
}
.itemList {
  width: 95%;
  margin: 0 2.5%;
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  align-items: center;
}
.itemTitle {
  font-size: 0.2rem;
  color: #9c9a9a;
}
.option {
  border-radius: 4px;
  border: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.option button {
  font-size: 0.2rem;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  border-right: 1px solid #333;
  padding: 0.05rem 0.4rem;
}
.option .active{
  background-color: #333;
  color: #ffffff;
}
.colorList .active{
  background: url("../assets/gou_icon.png") no-repeat center;
  background-size: 80%
}
.option button:last-child {
  border-right: 1px solid transparent;
}
.colorList {
  border: 1px solid transparent;
  width: 50%;
}
.colorList div {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  border: 1px solid #eeeeee;
}
.option .white {
  background-color: #f5f5f5;
}
.option .pink {
  background-color: #f0dada;
}
.option .yellow {
  background-color: #eedbb8;
}
.option .green {
  background-color: #d9e9cc;
}
.itemList img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: -0.15rem;
}
</style>


