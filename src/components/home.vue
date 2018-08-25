<template>
  <div id="app" :class="[this.$store.state.backgroundColor, this.$store.state.isNight]">
      <div class="head">
        <img class="set" src="../assets/set_icon.png" @click="setPattern(1)">
        <div class="minTitle" v-show="scrollTop>=100">{{details.title}}</div>
        <img class="option" src="../assets/x_icon.png" @click="setOption(1)">
      </div>
      <div :class="this.$store.state.fontSize">
        <div class="title">{{details.title}}</div>
        <div class="author">{{details.author}}</div>
        <div class="detailsContent" v-html="details.content"></div>
        <div class="wc">全文完 共{{details.wc}}字</div>
      </div>
      <settings v-if="isSet===1"/>
      <optionList v-show="isOption===1" :detailsData="details"/>
  </div>
</template>

<script>
import settings from "@/components/settings";
import optionList from "@/components/optionList";
export default {
  data() {
    return {
      details: {},
      isSet: 0,
      isOption: 0,
      scrollTop:0
    };
  },
  components: {
    settings,
    optionList
  },
  methods: {
    getToday() {
      this.$axios.get("/article/today?dev=1").then(res => {
        this.details = res.data;
        this.$store.commit("setDay", res.data.date.curr);
      });
    },
    setPattern(num) {
      this.isSet = num;
    },
    setOption(num) {
      this.isOption = num;
    },
    callback(data) {
      this.details = data;
      this.$store.commit("setCurrentTime", data.date.curr);
    },
    handleScroll() {
      this.scrollTop =document.documentElement.scrollTop ||document.body.scrollTop;
    }
  },
  mounted() {
    this.getToday();
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.3rem;
  overflow-x: hidden;
}
.pink {
  background-color: #f0dada;
  transition-duration: 200ms;
}
.yellow {
  background-color: #eedbb8;
  transition-duration: 200ms;
}
.green {
  background-color: #d9e9cc;
  transition-duration: 200ms;
}
.night {
  background-color: rgb(67, 68, 70);
  transition-duration: 200ms;
}
body {
  margin: 0;
}
.detailsContent {
  width: 95%;
  margin: 0 2.5%;
}
.smallFont{
    padding-top: 0.6rem;
}
.title {
  color: #000;
  font-size: 0.4rem;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
  letter-spacing: 1px;
  padding-bottom: .2rem
}
.minTitle{
  color: #000;
  font-size: 0.2rem;
  letter-spacing: 1px;
}
.night .title, .night .minTitle{
  color: #ccc;
}
.author {
  color: #b8b8b8;
  font-size: 0.3rem;
  margin-top: 0.1rem;
  margin-bottom: 0.3rem;
  text-align: center;
  letter-spacing: 1px;
}
p {
  text-indent: 2em;
  font-size: 0.3rem;
}
.wc {
  tab-size: 0.22rem;
  color: #b8b8b8;
  text-align: center;
  border-top: 1px solid #eeeeee;
  padding: 0.15rem 0;
  margin-top: 0.4rem;
}
.head {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 0.6rem;
  width: 100%;
  padding: 0 .25rem;
  position: fixed;
  align-items: center;
  background-color: #ffffff;
  top: 0;
  box-sizing: border-box;
}
.pink .head {
  background-color: #f0dada;
}
.yellow .head {
  background-color: #eedbb8;
}
.green .head {
  background-color: #d9e9cc;
}
.night .head {
  background-color: rgb(67, 68, 70);
}
.night p {
  color: #ccc;
}
.head img {
  width: 0.5rem;
  height: 0.5rem;
}
.head .set{
  width: 0.4rem;
  height: 0.4rem;
}
.middleFont{
    margin-top: .6rem
}
.middleFont .title {
  font-size: 0.45rem;
}
.middleFont .author {
  font-size: 0.35rem;
}
.middleFont p {
  font-size: 0.35rem;
}
.middleFont .wc {
  font-size: 0.27rem;
}

.bigFont{
    margin-top: .6rem
}
.bigFont .title {
  font-size: 0.5rem;
}
.bigFont .author {
  font-size: 0.4rem;
}
.bigFont p {
  font-size: 0.4rem;
}
.bigFont .wc {
  font-size: 0.32rem;
}
</style>
