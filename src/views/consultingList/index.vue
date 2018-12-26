<template>
    <div>
        <div class="wsbodyhead">
            <a href="javascript:;" class="aside_tit">咨询列表</a>
        </div>


        <div class="item-search">

        </div>

        <div class="item-table">


            <el-table :data="tableData" border style="width: 100%" class="mt-10">
                <el-table-column type="index" width="50" label="序号"></el-table-column>
                <el-table-column  prop="art_title" label="咨询标题" ></el-table-column>
                <el-table-column  prop="art_desc" label="咨询描述" ></el-table-column>
                <el-table-column  prop="art_type" label="咨询类型" >

                </el-table-column>
                <el-table-column  prop="create_time" label="创建时间" ></el-table-column>
                <el-table-column  prop="update_time" label="修改时间" ></el-table-column>

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


        <!--<el-input v-model="value"></el-input>-->
        <customer-button type="primary" :disabled="!value">hello world</customer-button>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                tableData: [],
                pager: {
                    pageNum: 1,
                    pageSize: 10,
                    count: 0
                }
            }
        },
        methods:{
            doQuery(){
                this.$http.post('/server/queryArtInfo.php',{pageNum: 1, pageSize: 10, artType: 1,keyWords: '地下车库'}).then(res => {
                    this.tableData = res.result.list;
                })
            }
        },
        created(){
            this.doQuery();
        }
    }
</script>

<style scoped>

</style>