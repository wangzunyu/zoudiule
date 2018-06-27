<template>
  <div>
    <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
    class="header-fiexd"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      城市选
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 先储存top位置
      const Top = document.documentElement.scrollTop
      // 判断当top大于60
      if (Top > 60) {
        // opacity渐变数字变化 = top值 / 想要在滑动多少时显示
        let opacity = Top / 140
        // 设置 opacity 的值 当他大于 1 时 让他等于 1 或者等于 opacity
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0,0,0,.8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fiexd
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
