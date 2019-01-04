<template>
  <div class="menu-box">
    123123

    <el-menu
      router
      :default-active="'/main/customerInfo'"
      :unique-opened="true"
    >


            <!-- 如果当前是 推送记录菜单 特殊处理-->


              <el-menu-item v-for="(menu) in menuList" :key="menu.menuId" :index="`/main/${menu.menuUrl}`">
                <i class="ico_userManage2"></i>
                {{menu.menuName}}
              </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 是否存在 推送记录
        isPushRecord : false,
        // menu list
        menuList : [

                    {
                        menuName: '顾客信息',
                        menuId: 2,
                        menuUrl: 'customerInfo',
                    },
                    {
                        menuName: '咨询发布',
                        menuId: 3,
                        menuUrl: 'consultingRelease',
                    },
                    {
                        menuName: '咨询列表',
                        menuId: 4,
                        menuUrl: 'consultingList'
                    }

        ],
        // 推送记录 定时器
        timer : '',
      }
    },
    mounted() {

      // 获取menu 树 , 高亮选中


    },
    methods : {

      // 设置当前 高亮
      setMuenActive() {
        let routerName = this.$route.meta.name;
        this.menuList.map((v) => {
          if(v.children && v.children.length > 0){
            v.children.map((v1) => {
              if(v1.menuUrl.indexOf(routerName) !== -1){
                // this.active = `/main/${v1.menuUrl}`;
                this.$store.commit('menu/setMenuActive',`/main/${v1.menuUrl}`);
              }
            });
          }
        });

      },
      // 更新 推送记录
      timingRecord() {
        this.$store.dispatch('menu/upDataPushRecordUnread');
      },
    },
    destroyed() {
      clearInterval(this.timer);
    },
  }
</script>

<style lang="scss" scoped>


/* aside icon start */
.ico_userManage:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -121px -259px; width: 23px; height: 20px; }

.ico_userSearch:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -290px -63px; width: 21px; height: 22px; }

.ico_roleManage:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -113px -290px; width: 23px; height: 17px; }

.ico_menuManage:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -32px -227px; width: 24px; height: 24px; }

.ico_me:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: 0px -227px; width: 24px; height: 24px; }

.ico_pwd:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -319px -248px; width: 16px; height: 18px; margin-right: 16px; margin-left: 5px; }

.ico_fzzqApply:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -319px -59px; width: 19px; height: 20px; }

.ico_fzzqSearch:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -290px -63px; width: 21px; height: 22px; }

.ico_fzzqSet:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -258px 0px; width: 24px; height: 24px; }

.ico_fzzqConfirm:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -224px -195px; width: 24px; height: 24px; }

.ico_rebate:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -192px -195px; width: 24px; height: 24px; }

.ico_voucher:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -160px -195px; width: 24px; height: 24px; }

.ico_addmoney:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -128px -195px; width: 24px; height: 24px; }

.ico_orderM:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -96px -195px; width: 24px; height: 24px; }

.ico_profee:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -57px -290px; width: 20px; height: 20px; }

.ico_service:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -32px -195px; width: 24px; height: 24px; }

.ico_tec:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: 0px -195px; width: 24px; height: 24px; }

.ico_settle:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px -160px; width: 24px; height: 24px; }

.ico_custom:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px -128px; width: 24px; height: 24px; }

.ico_tpl:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px -96px; width: 24px; height: 24px; }

.ico_tplset:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px -64px; width: 24px; height: 24px; }

.ico_balance:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px -32px; width: 24px; height: 24px; }

.ico_ajorder:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -226px 0px; width: 24px; height: 24px; }

.ico_card:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -192px -163px; width: 24px; height: 24px; }

.ico_client:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -160px -163px; width: 24px; height: 24px; }

.ico_arb:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -128px -163px; width: 24px; height: 24px; }

.ico_caseM:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -96px -163px; width: 24px; height: 24px; }

.ico_arbuser:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -64px -163px; width: 24px; height: 24px; }

.ico_arbboard:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -252px -227px; width: 22px; height: 22px; }

.ico_gmail:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -30px -259px; width: 22px; height: 23px; }

.ico_consulting:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -152px -259px; width: 22px; height: 20px; }

.ico_newstate:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -194px -96px; width: 24px; height: 24px; }

.ico_clientcase:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -194px -64px; width: 24px; height: 24px; }

.ico_sendemail:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -242px -259px; width: 22px; height: 18px; }

.ico_sendnote:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -194px 0px; width: 24px; height: 24px; }

.ico_caselib:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -258px -64px; width: 24px; height: 24px; }

.ico_casebchk:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -258px -96px; width: 24px; height: 24px; }

.ico_preReview:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -258px -128px; width: 24px; height: 24px; }

.ico_caseList:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -98px -129px; width: 24px; height: 24px; }

.ico_bsqrback:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -66px -129px; width: 24px; height: 24px; }

.ico_hkmsg:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -162px -97px; width: 24px; height: 24px; }

.ico_bsqrHistory:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -130px -97px; width: 24px; height: 24px; }

.ico_sendHistory:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -162px -129px; width: 24px; height: 24px; }

.ico_reiveHistory:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -130px -129px; width: 24px; height: 24px; }

.ico_customAllot:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -98px -97px; width: 24px; height: 24px; }

.ico_mstatusSet:before { background-image: url('./../../../assets/img/png-sprite.png'); content: ''; display: inline-block; vertical-align: text-bottom; margin-right: 12px; background-position: -66px -97px; width: 24px; height: 24px; }

/* end */


.menu-box{

}

</style>

<style lang="scss">

.menu-box{

}

</style>
