<template>
  <div>
    <div class="sech">
      <input
      class="sech-input"
      v-model="keyword"
      type="text"
      placeholder="输入城市/地址"
      >
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
        v-for="item of list"
        :key="item.id"
        class="search-item border-bottom"
        @click="cityClick(item.name)"
        >
        {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasata">6666</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySech',
  data () {
    // 使用 v-model 进行数据双向绑定
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      // 判断有这个 timer 就去除这个计时器
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果keyword 不存在 就让list为空 在返回
      if (!this.keyword) {
        this.list = []
        return
      }
      // 当keyword发生改变时 隔100毫秒就执行 箭头函数
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 如果在 spell 或者 name 里面能搜索到这个关键字 就把这项添加到 result
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    cityClick (city) {
      // this.$store.commit('clickCity', city)
      // 页面跳转到首页
      this.clickCity(city)
      this.$router.push('/')
    },
    // 有一个 mutations 叫做 clickCity 把这个 mutations 映射到组件里面名字叫 clickCity方法里
    ...mapMutations(['clickCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasata () {
      return !this.list.length
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~styles/varibles.styl'
  .sech
    height .72rem
    background $bgColor
    padding 0 .1rem
    .sech-input
      box-sizing border-box
      padding 0 .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
  .search-content
    z-index 1
    position absolute
    overflow hidden
    // background green
    top 1.58rem
    left 0
    right 0
    bottom 0
    .search-item
      line-height .62rem
      padding-left .2rem
      background #ccc
      color #666
</style>
