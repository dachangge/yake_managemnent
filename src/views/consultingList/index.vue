<template>
    <div>
        <div class="wsbodyhead">
            <a href="javascript:;" class="aside_tit">咨询列表</a>
        </div>


        <div class="item-search">
            <el-form :inline="true" ref="ruleForm" :model="searchItem" >
                <el-form-item style="margin-bottom: 0;" label="">
                    <el-input clearable style="width: 230px;" v-model="searchItem.keyWords" placeholder="请输入咨询标题"></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 0;" label="">
                    <el-select style="width:200px;" clearable v-model="searchItem.artType" placeholder="请选择">
                        <!--1安装案例 2行业资讯 3 媒体案例-->
                        <el-option label="安装案例" :value="1"></el-option>
                        <el-option label="行业资讯" :value="2"></el-option>
                        <el-option label="媒体案例" :value="3"></el-option>
                    </el-select>
                </el-form-item>
                <customer-button type="warning"  @click="query">查询</customer-button>

            </el-form>
        </div>

        <div class="item-table">


            <el-table :data="tableData" border style="width: 100%" class="mt-10">
                <el-table-column type="index" width="50" label="序号"></el-table-column>
                <el-table-column  prop="art_title" label="咨询标题" ></el-table-column>
                <el-table-column  prop="art_desc" label="咨询描述" ></el-table-column>
                <el-table-column  prop="art_type" label="咨询类型" >
                    <template slot-scope="scope">
                        <!--1安装案例 2行业资讯 3 媒体案例-->
                        <span>{{scope.row.art_type == 1 ? '安装案例' : scope.row.art_type == 2 ? '行业咨询' : scope.row.art_type == 3 ? '媒体案例' : '--'}}</span>
                    </template>
                </el-table-column>
                <el-table-column  prop="create_time" label="创建时间" ></el-table-column>
                <el-table-column  prop="update_time" label="修改时间" ></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <customer-button @click="handleEdit(scope.row)" type="text" size="small">修改</customer-button>
                        <customer-button @click="handleDelete(scope.row, scope.$index)" type="text" size="small">删除</customer-button>
                    </template>
                </el-table-column>

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
        name: 'index',
        data(){
            return {
                searchItem:{
                  keyWords: '',
                  artType: ''
                },
                tableData: [],
                pager: {
                    pageNum: 1,
                    pageSize: 10,
                    count: 0
                }
            }
        },
        methods:{
            query(){
              this.pager.pageNum = 1;
              this.doQuery();
            },

            doQuery(){
                this.$http.post('/server/queryArtInfo.php',{...this.pager, ...this.searchItem}).then(res => {
                    this.tableData = res.result.list;
                    this.pager.count = +res.result.count;
                })
            },
            handleSizeChange(val){
                this.pager.pageSize = val;
                this.pager.pageNum = 1;
                this.doQuery();
            },
            handleCurrentChange(val){
                this.pager.pageNum = val;
                this.doQuery();
            },

            handleEdit(row){

            },

            handleDelete(row,index){
                this.$confirm('确定要删除该条咨询吗?', '提示', {
                    center: true,
                }).then(() => {
                    this.$http.post("/server/deleteArtInfoByArtId.php",{artId: row.art_id}).then(res => {
                        this.$message.success("删除成功");
                        this.tableData.splice(index, 1);
                    })
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