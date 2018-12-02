<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    // 引入 公共css
    import '@/assets/style/scss/index.scss'
    // 引入 iconfont
    import '@/assets/style/iconfont/iconfont.css'

    export default {
        name: 'App'
    }
</script>

<style lang="scss" scoped>

  #app{
    height: 100%;
  }

</style>
