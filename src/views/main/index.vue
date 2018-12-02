<template>
  <div class="main">
    <top class="mb-10"></top>
    <div class="box">
      <!-- 左侧菜单 -->
      <div class="menu fl">
        <div class="m-scrollbar-box">
          <el-scrollbar :native="false">
            <menuL />
          </el-scrollbar>
        </div>
      </div>
      <!-- router 内容 -->
      <div class="page-content fl">
        <div class="m-scrollbar-box">
          <el-scrollbar :native="false">
            <transition name="el-fade-in-linear" mode="out-in">
              <router-view/>
            </transition>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import top from './modules/top.vue'
  import menuL from './modules/menu.vue'

  export default {
    components : {
      top,
      menuL,
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/helper/_mixin.scss';
.main{
  background-color: #F1F2F7;
  overflow: auto;
  height: 100%;
  min-height: 100%;
   @include customScrollBar;
  .box{
    width: 100%;
    margin: 0 auto;
    .menu{
      width: 220px;
      height: calc(100vh - 60px);
      /* margin-right: 10px; */
      overflow-y: auto;
    }
    .page-content{
      width: calc(100% - 230px);
      height: calc(100vh - 60px);
      overflow-y: auto;
    }
  }
}

</style>

<style lang="scss">

.m-scrollbar-box{
  height: 100%;
  overflow: hidden;
  .el-scrollbar{
    height: 100%;
  }
  .el-scrollbar__wrap{
    height: 100%;
    overflow-x: hidden;
  }
  .el-scrollbar__view{
    padding-right: 10px;
  }
}

</style> 
