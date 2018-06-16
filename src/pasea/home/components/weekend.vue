<template>
  <div>
    <div class="recommend-title">
      周末去哪浪
    </div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '故宫十大打包',
        text: '家回复哈大四百度'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '故宫十大爱仕达多群多打包',
        text: '家回复哈大阿斯顿发出四百度'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        title: '故宫十驱蚊器二大打包',
        text: '家回复哈萨达多所大四百度'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/18/2d554e22faa25f.jpg_r_640x214_2a966a54.jpg',
        title: '故宫十委屈翁群若无群大打包',
        text: '家回复哈大萨达多四百度'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        title: '奥术大师多',
        text: '家回复哈大爱仕达多四百度'
      }]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend-title
    line-height .8rem
    background #ccc
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    border-bottom solid #ccc .01rem
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .item-text
      line-height .4rem
      color #ccc
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
