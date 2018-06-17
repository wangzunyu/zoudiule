<template>
  <div class="sech">
    <input class="sech-input" type="text" placeholder="输入城市/地址">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CitySech'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/varibles.styl'
  .sech
    height .72rem
    background $bgColor
    padding 0 .1rem
    .sech-input
      box-sizing border-box
      padding 0 .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
</style>
