<template>
  <div class="not-find">
    <img src="./../../assets/img/picnotfound.gif" />
    <div>
      <router-link to='/'>
        <el-button type="primary">
          返回首页
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .not-find {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
</style>
