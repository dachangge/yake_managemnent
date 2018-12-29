<template>
    <div class="consultingRelease">
        <div class="wsbodyhead">
            <a href="javascript:;" class="aside_tit">咨询发布</a>
        </div>

        <div class="item-table">
            <el-form ref="form" :rules="rules" :model="item" label-width="80px">

                <el-form-item label="资讯类型" prop="art_type">
                    <el-select v-model="item.art_type" placeholder="请选择类型">
                        <!--1安装案例 2行业资讯 3 媒体案例-->
                        <el-option label="安装案例" :value="1"></el-option>
                        <el-option label="行业资讯" :value="2"></el-option>
                        <el-option label="媒体案例" :value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="资讯标题" prop="art_title">
                    <el-input v-model="item.art_title"></el-input>
                </el-form-item>
                <el-form-item label="资讯描述" prop="art_desc">
                    <el-input type="textarea" v-model="item.art_desc"></el-input>
                </el-form-item>

                <el-form-item label="资讯简图" prop="art_pic">
                    <el-upload
                            :show-file-list="false"
                            :on-success="uploadSuccess"
                            class="upload-demo"
                            action="/server/imgUpload.php"
                            accept="image/png,image/jpeg,image/jpg"

                            >
                        <el-button >点击上传</el-button>
                    </el-upload>
                </el-form-item>

                <el-form-item label="图片预览">
                    <img style="max-width: 300px;" :src="item.art_pic" alt="">

                </el-form-item>

            </el-form>





            <p class="mt-10 mb-10">资讯主体：</p>
            <Editor  id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>


        </div>

        <div class="footer" >
            <el-button type="primary" @click="HandleSubmit" v-if="tab === 0">提交文章</el-button>
            <el-button type="primary" @click="HandleEdit" v-if="tab === 1">修改内容</el-button>
            <el-button  @click="HandleReturn" v-if="tab === 1">取消</el-button>
            <el-button @click="HandleCancel" v-if="tab === 0" >重置内容</el-button>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
    name: 'consultingRelease',
    components:{
        Editor
    },

    data(){
        return {
            item: {art_pic: ''},
            rules:{
                art_type : [
                    {required : true , trigger : 'change' , message : '请选择咨询类型'}
                ],
                art_title : [
                    {required : true , trigger : 'blur' , message : '请输入咨询标题'}
                ],
                art_desc: [
                    {required : true , trigger : 'blur' , message : '请输入咨询描述'}
                ],
                art_pic: [
                    {required : true , trigger : 'blur' , message : '请上传咨询缩略图'}
                ]
            },

            src: '',
            editorInit: {
                language_url: `tinymce/zh_CN.js`,
                language: 'zh_CN',
                skin_url: `tinymce/skins/lightgray`,
                height: 300,
                plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
                toolbar:
                    'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
                branding: false,
                images_upload_handler:(blobInfo, success, failure) => {
                    this.handleImgUpload(blobInfo, success, failure)
                }
            },
            tinymceHtml: '',
            tab: 0
        }

    },
    methods:{

        init(result){

            result.art_type = +result.art_type;
            this.item = result;
            this.tab = 1;
            this.tinymceHtml = this.item.art_html;

        },

        //提交内容
        HandleSubmit(){
            console.log(this.tinymceHtml);
            this.$refs.form.validate(res => {
                if(res){
                    //提交表单
                    if(!this.tinymceHtml){
                       return this.$message.warning("请输入咨询主体");
                    }
                    this.$http.post("/server/saveArtInfo.php",{...this.item, art_html: this.tinymceHtml}).then(res => {
                        console.log(res);
                    })
                }
            })
        },
        HandleEdit(){
            this.$refs.form.validate(res => {
                    if(res) {
                        this.$http.post("/server/updateArtByArtId.php",{...this.item, art_html: this.tinymceHtml}).then(res => {
                            console.log(res);
                        })
                    }
            })
        },
        HandleReturn(){
            console.log(this.$parent);
            this.$refs.form.resetFields();
            this.$parent.$parent.innerVisible = false;
        },

        //重置内容
        HandleCancel(){
            this.$refs.form.resetFields();
        },


        uploadSuccess(response, file, fileList){
            console.log(response,file,fileList);
            if(response.code === 1){
                this.item.art_pic = 'http://yousouyun.gotoip2.com' + response.result.substring(5);
            }
        },


        handleImgUpload(blobInfo, success, failure){
            let formdata = new FormData()
            formdata.set('file', blobInfo.blob())
            this.$http.post('/server/imgUpload.php', formdata,{mheaders: true,header: {'Content-Type': 'multipart/form-data'}}).then(res => {
                console.log(res);
                success(res.result)
            }).catch(res => {
                failure(res.result)
            })
        }
    },
    mounted(){
        tinymce.init({});
    }
}
</script>

<style scoped>

    .item-table{
        padding: 15px 20px;
    }
    .footer{
        text-align: center;
        padding: 20px 0;
        background: #fff;
    }
</style>