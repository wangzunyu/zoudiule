<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <router-link
      tag="li"
      class="item"
      v-for="item of list"
      :key="item.id"
      :to="'/detail/' + item.id"
      >
          <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-text">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫十大打包',
        text: '家回复哈大四百度'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg',
        title: '故宫十大爱仕达多群多打包',
        text: '家回复哈大阿斯顿发出四百度'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
        title: '故宫十驱蚊器二大打包',
        text: '家回复哈萨达多所大四百度'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
        title: '故宫十委屈翁群若无群大打包',
        text: '家回复哈大萨达多四百度'
      },
      {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
        title: '奥术大师多',
        text: '家回复哈大爱仕达多四百度'
      }]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #ccc
    text-indent .2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    border-bottom solid #ccc .01rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
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
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ccc
</style>
