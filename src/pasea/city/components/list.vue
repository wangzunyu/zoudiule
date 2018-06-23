<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.curtcity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
          class="button-wrapper"
          v-for="item of hot"
          :key="item.id"
          @click="cityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :ref="key" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
          class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="cityClick(innerItem.name)"
          >
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      curtcity: 'city'
    })
  },
  methods: {
    cityClick (city) {
      // this.$store.commit('clickCity', city)
      // 页面跳转到首页
      this.clickCity(city)
      this.$router.push('/')
    },
    // 有一个 mutations 叫做 clickCity 把这个 mutations 映射到组件里面名字叫 clickCity方法里
    ...mapMutations(['clickCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        // console.log(element)
      }
      // console.log(this.letter)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color #666
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eeeeee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding  .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666666
        padding-left .2rem
</style>
