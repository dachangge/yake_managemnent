<template>
    <div class="customerInfo">
        <div class="wsbodyhead">
            <a href="javascript:;" class="aside_tit">客户信息</a>
        </div>

        <div class="item-search" style="overflow: hidden;">
            <customer-button class="fr" @click="exportFile" type="warning">导出</customer-button>
        </div>

        <div class="item-table">


            <el-table :data="tableData" border style="width: 100%" class="mt-10">
                <el-table-column type="index" width="50" label="序号"></el-table-column>
                <el-table-column  prop="customer_name" label="客户姓名" ></el-table-column>
                <el-table-column  prop="company_name" label="公司名称" ></el-table-column>
                <el-table-column  prop="phone" label="客户电话" ></el-table-column>
                <el-table-column  prop="province" label="省" ></el-table-column>
                <el-table-column  prop="city" label="市" ></el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
                    class="mt-10 mb-10"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pager.pageNum"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pager.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pager.count">
            </el-pagination>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'customerInfo',
        data(){
          return {
              tableData: [],
              pager:{
                  pageNum: 1,
                  pageSize: 10,
                  count: 0
              }
          }
        },
        methods:{
            exportFile(){
              const iframe = document.createElement('iframe');
              iframe.style.display='none';
              console.log(process.env)
              iframe.src= 'http://yousouyun.gotoip2.com' + '/server/exportCustomerExcel.php';
              document.querySelector('body').appendChild(iframe);
              // document.querySelector('body').removeChild(iframe);
            },


          doQuery(){
              this.$http.post("/server/queryCustomerInfo.php",{...this.pager}).then(res => {
                  // this.pager.count = +res.result.count;
                  this.tableData = res.result.list;

              })
            },
            handleSizeChange(val){
              this.pager.pageNum= 1;
              this.pager.pageSize = val;
                this.doQuery();
            },
            handleCurrentChange(val){

              this.pager.pageNum = val;
              this.doQuery();
            }

        },
        created(){
           this.doQuery();
        }
    }
</script>

<style scoped>

</style>