<template>
  <div>
    <city-header></city-header>
    <city-sech></city-sech>
    <city-list :letter="letter" :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities" @changet="letterChange"></city-alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
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
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      // 定义这个方法接受模拟数据的值
      res = res.data
      if (res.ret && res.data) { // 逻辑与 && 第一个操作数的布尔值为true，则值为第二个操作数，第一个操作符的布尔值为false则值为第一个操作数
        // console.log(res)
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    letterChange (letter) {
      this.letter = letter
      console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
