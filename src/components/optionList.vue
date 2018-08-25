<template lang="pug">
    .content(@click="isShow()")
        .list
            .advance(@click="isAdvance()")
                img(src='../assets/advance.png') 
                .t 前一天
            .retreat(@click="isRetreat()" v-if="this.$store.state.day!=this.$store.state.currentTime&&isToday!=0")
                img(src='../assets/retreat.png')
                .t 后一天
            .random(@click="isRandom()")
                img(src='../assets/random.png')
                .t 随机
            .day(@click="isDay()" v-if="this.$store.state.day!=this.$store.state.currentTime&&isToday!=0")
                img(src='../assets/day.png')
                .t 今天

</template>
<script>
export default {
  data() {
    return {
      isToday: 0
    };
  },
  props: {
    detailsData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    isShow() {
      this.$parent.setOption(0);
    },
    isAdvance() {
      this.dayData(this.detailsData.date.prev);
    },
    isRetreat() {
      this.dayData(this.detailsData.date.next);
    },
    isRandom() {
      this.$axios.get(`/article/random?dev=1`).then(res => {
        this.$parent.callback(res.data);
      });
    },
    isDay() {
      this.dayData(this.$store.state.day);
    },
    dayData(id) {
      this.$axios.get(`/article/day?dev=1&date=${id}`).then(res => {
        this.isToday = 1;
        this.$parent.callback(res.data);
      });
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
  background-color: rgba(000, 000, 000, 0.5);
}
.list {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 1.2rem;
  background: rgba(000, 000, 000, 1);
}
.list img {
  width: 0.55rem;
  height: 0.55rem;
  margin: 0 30%;
}
.list .t {
  text-align: center;
  padding-bottom: 0.5rem;
  color: #bfbfbf;
  font-size: 0.2rem;
}
.list .advance {
  margin-top: 2rem;
}
</style>


