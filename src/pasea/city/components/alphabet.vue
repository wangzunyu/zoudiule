<template>
  <ul class="list">
    <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handTouchStart"
    @touchmove="handTouchMove"
    @touchend="handTouchEnd"
    @click="leterClick"
    >
    {{item}}
    </li>
  </ul>
<!-- //子组件可以使用 $emit 触发父组件的自定义事件。   -->
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      // 执行一个方法 现定义一个空数组 利用循环 往里面添加数据
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // console.log(letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      // 设置一个标识位
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    leterClick (e) {
      this.$emit('changet', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handTouchStart () {
      // 右侧字母表的滑动联动 触摸时的变化
      this.touchStatus = true
    },
    handTouchMove (e) {
      // 在滑动时判断 字母所在位置 获得a距离顶部所在的位置高度 滑动时手指位置距离顶部的高度 做一个差值
      if (this.touchStatus) {
        if (this.timer) {
          // 函数节流  如果存在就 去除 计时
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 否则创建 timer
          // const startY = this.$refs['A'][0].offsetTop
          // 手指距离追顶部的高度
          const touchY = e.touches[0].clientY - 79
          // 手指滑动位置相对应的 字母下标 字母高度20
          const index = Math.floor((touchY - this.startY) / 20)
          // 判断手指滑动位置 大于等于0 或 位置小与数组里面的长度
          if (index >= 0 && index < this.letters.length) {
            // 使用 $emit 触发 change事间 后面是事间携带内容
            this.$emit('changet', this.letters[index])
          }
        }, 16)
      }
    },
    handTouchEnd () {
      // 结束滑动时
      this.touchStatus = false
    }
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
      padding-top .2rem
</style>
