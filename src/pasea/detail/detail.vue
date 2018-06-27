<template>
  <div>
    <detail-baner></detail-baner>
    <detail-header></detail-header>
    <div class="cet"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBaner from './components/baner'
import DetailHeader from './components/header'
export default {
  name: 'Detail',
  components: {
    DetailBaner,
    DetailHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cet
    height 50rem
</style>
