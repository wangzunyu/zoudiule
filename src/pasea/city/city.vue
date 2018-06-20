<template>
  <div>
    <city-header></city-header>
    <city-sech></city-sech>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
import CityHeader from './components/Header'
import CitySech from './components/sech'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySech,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
