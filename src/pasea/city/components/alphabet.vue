<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    width .4rem
    bottom 0
    // background red
    .item
      color #333
      text-align center
</style>
