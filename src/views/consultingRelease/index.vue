<template>
    <div class="consultingRelease">
        <div class="wsbodyhead">
            <a href="javascript:;" class="aside_tit">咨询发布</a>
        </div>

        <div class="item-table">




            <Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>


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
            tinymceHtml: ''
        }

    },
    methods:{
        handleImgUpload(blobInfo, success, failure){
            let formdata = new FormData()
            formdata.set('file', blobInfo.blob())
            this.$http.post('/server/imgUpload.php', formdata,{mheaders: true,header: {'Content-Type': 'multipart/form-data'}}).then(res => {
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

</style>