<template>
  <div class="top-header">
    <div class="content">
      <div class="left fl">
        <a class="cursor css15b692d27d1e8e3">
          资产处置分发平台
          <!-- <span>•</span> -->
        </a>
        <!-- <span class="ml-5">
          业务后台管理系统
        </span> -->
      </div>

      <div class="right fr">
        <div class="fl">
          <!-- {{new Date() | TimeMomentChina}}
          <span class="ml-10 mr-10">|</span> -->
          {{userName}}
          <el-button @click="handleSignOut" class="m-btn">
            <i class="iconfont icon-tuichu"></i>
            退出登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      userName : '',
    };
  },
  mounted() {
    try{
      this.userName = JSON.parse(localStorage.getItem('loginInfo')).userName;
    }catch(err) {

    }
  },
  methods: {
    handleSignOut() {
      this.$confirm("是否退出-互仲后台管理系统?", "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "确定",
        center: true
      }).then(() => {
        // this.$http("/logout.htm").then((res) => {

          localStorage.removeItem("loginInfo");
          localStorage.removeItem("menuInfoList");
          this.$router.push({ path: "/login" });
        // });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  background-color: #fff;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e4e8;
  .content {
    width: 100%;
    .left {
      color: #0f357f;
      a {
        font-size: 26px;
        /* font-family: "stlitiregular"; */
        display: inline-block;
        vertical-align: middle;
        margin-top: 11px;
        text-align: center;
        padding-left: 18px;
      }
      > span {
        font-size: 18px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 3px;
      }
    }
    .right {
      padding-right: 18px;
      line-height: 50px;
      .iconfont {
        font-size: 16px;
      }
      .m-btn {
        padding: 5px 5px;
        border: 1px solid #747f94;
        margin-left: 10px;
      }
    }
  }
}
</style>
