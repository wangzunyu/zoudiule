<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/varibles.styl'
  .header
    position relative
    height .86rem
    line-height .86rem
    overflow hidden
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
