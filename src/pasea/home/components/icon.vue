<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for='item of page' :key="item.id" class="icon">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl">
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // autoplay: false
      },
      iconList: [
        {
          id: '00001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票'
        },
        {
          id: '00002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          text: '必游榜单'
        },
        {
          id: '00003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          text: '夏日晚上'
        },
        {
          id: '00004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          text: '一日游'
        },
        {
          id: '00005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          text: '动物园'
        },
        {
          id: '00006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          text: '故宫票'
        },
        {
          id: '00007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          text: '主题乐园'
        },
        {
          id: '00008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          text: 'Q+哈哈'
        },
        {
          id: '00009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          text: '全部'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = [] // 定义一个全局空数组
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8) // 定义一个全局变量 向下取整
        if (!pages[page]) { // 判断这个 page 不存在
          pages[page] = [] // 就等于一个空
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/varibles.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      // background pink
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        // background blue
        .icon-imgcontent
          display block
          height 100%
          margin 0 auto
      .icon-text
        position absolute
        left 0
        right 0
        bottom 0
        text-align center
        height .44rem
        line-height .44rem
        color $darkTextColor
        overflow hidden // 超出部分隐藏
        white-space nowrap // 文本不进行换行
        text-overflow ellipsis // 显示省略符号来代表被修剪的文本
</style>
