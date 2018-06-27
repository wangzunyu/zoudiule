<template>
  <div>
    <div class="baner" @click="handleBannerClick">
      <img class="baner-img" :src="bannerImg">
      <div class="baner-info">
        <div class="baner-tittle">
          {{this.sightName}}
        </div>
        <div class="baner-number">
          <span class="iconfont baner-icon">&#59026;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fa-ce>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClick"
      ></common-gallary>
    </fa-ce>
  </div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/gallary'
import FaCe from 'common/face/face'
export default {
  name: 'baner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FaCe
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .baner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .baner-img
      width 100%
    .baner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .baner-tittle
        font-size .32rem
        padding 0 .2rem
        flex 1
      .baner-number
        margin-top .14rem
        font-size .24rem
        padding 0 .4rem
        height .32rem
        line-height .32rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        .baner-icon
          font-size .24rem
</style>
