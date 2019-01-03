<template>

    <el-dialog
            title="咨询修改"
            :visible.sync="innerVisible"
             width="750px">
        <consulting  ref="consulting"></consulting>
    </el-dialog>
</template>

<script>
    import consulting from '../../consultingRelease/index'
    export default {
        name: 'edit',
        components: {
            consulting
        },
        data(){
          return {
              innerVisible: false
          }
        },
        methods:{
            show(result){
                this.innerVisible = true;
                this.$nextTick(() => {
                    this.$refs.consulting.init(result);
                })
            }
        }
    }
</script>

<style scoped>

</style>