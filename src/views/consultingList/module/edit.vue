<template>
        <el-dialog
                class="consiltingEdit"
                title="提示"
                :visible.sync="flag"
                width="30%"
                center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="flag = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
</template>

<script>
    export default {
        name: 'consiltingEdit',
        data(){
            return {
                flag: false
            }
        },
        methods: {
            show(){
                this.flag = true;
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>