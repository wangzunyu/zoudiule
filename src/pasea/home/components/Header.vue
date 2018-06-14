<template>
  <div class="header">
    <div class="header-let">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
        别瞎走/丢了咋整
    </div>
    <div class="header-rit">
        城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex //弹性布局
    line-height: .86rem //行高
    background: $bgColor
    color #fff
    .header-let
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      height .64rem
      padding-left .2rem
      line-height .64rem
      background #ffffff
      border-radius .1rem
      margin .12rem 0 0 .2rem
      color #cccccc
    .header-rit
      width: 1.24rem
      float: right
      text-align center //文本居中
      .arrow-icon
        margin-left -.02rem
        font-size .2rem
</style>
