<template>
  <div>
    <detail-baner></detail-baner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="cet"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBaner from './components/baner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'Detail',
  components: {
    DetailBaner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '全票',
        children: [{
          title: '恒仁来吧',
          children: [{
            title: '刷开始蒂萨'
          }]
        },
        {
          title: '恒仁山东来吧'
        }]
      },
      {
        title: '半票'
      }]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cet
    height 50rem
</style>
