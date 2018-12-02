<template>
	<div class="login-box">
		<div class="title">
			<div class="fl">
				互仲科技 | 资金处置分发平台
			</div>
			<div class="fr">
				<a target="_blank" href="http://www.arbexpress.cn" class="el-button el-button--default">仲财通官网</a>
			</div>
		</div>
		<div class="content">
			<img class="m-img" src="./../../assets/img/computer.png" />
			<div class="m-form">
				<div class="login-title">
					<span>账号登陆</span>
				</div>
				<el-form class="form-box" :rules="rules" ref="ruleForm" :model="ruleForm">
					<el-form-item label=" " prop="loginName" class="mt-30">
						<el-input
							placeholder="输入您的账号"
							v-model.trim="ruleForm.loginName">
							<i slot="prefix" class="iconfont icon-denglu"></i>
						</el-input>
					</el-form-item>

					<el-form-item label=" " prop="passWord" class="mt-30">
						<el-input
							placeholder="输入您的登录密码"
							type="password"
							@keyup.native.13="handleSubmit"
							v-model.trim="ruleForm.passWord">
							<i slot="prefix" class="iconfont icon-mima"></i>
						</el-input>
					</el-form-item>

					<el-checkbox class="mt-10" v-model="ruleForm.isAccountNumber">记住账号</el-checkbox>

					<div class="mt-20">
						<el-button
							@click="handleSubmit"
							:style="{
								width : '100%',
								height : '50px',
								fontSize : '24px',
							}"
							type="warning"
						>
							登录
						</el-button>
					</div>
				</el-form>
			</div>
		</div>
		<div class="m-footer">
			© 2017-2018 杭州互仲网络科技有限公司 版权所有 浙ICP备17016869号-1
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm : {
					loginName : localStorage.getItem('loginName') || '',
					passWord : '',
					isAccountNumber : localStorage.getItem('loginName')? true : false,
				},
				rules : {
					loginName : [
						{ required : true , message : '请输入账号' , trigger : 'blur'},
						{required : true , pattern : /^\d{11}$/ , message : '手机号码长度为11位' }
					],
					passWord : [
						{ required : true , message : '请输入密码' , trigger : 'blur'},
						{ required : true , min : 6 , message : '密码长度最少为6位'}
					],
				},
			}
		},
		methods : {

            handleSubmit(){

                this.$http.post("/web/login.htm").then(res => {
					localStorage.setItem('loginInfo', JSON.stringify(res.result));
                    this.$router.push('main/customerInfo')
				})
			}
		},
	}
</script>

<style lang="scss" scoped>

.login-box{
	background-image: -webkit-gradient(linear, left top, right top, from(#3c65d0), to(rgba(70, 152, 228, 0.8)));
	background-image: -webkit-linear-gradient(left, #3c65d0, rgba(70, 152, 228, 0.8));
	background-image: linear-gradient(to right, #3c65d0, rgba(70, 152, 228, 0.8));
	height: 100%;
	min-width: 1200px;
	position: relative;
	.title{
		width: 1200px;
		margin: 0 auto;
		padding-top: 30px;
		.fl{
			color: #fff;
			font-size: 36px;
		}
	}
	.m-img{
		position: absolute;
		top: calc( (100% - 485px) / 2 + 30px);
		left: calc( (100% - 1200px) / 2);
	}
	.m-form{
		position: absolute;
		top: calc( (100% - 377px) / 2 + 30px);
		right: calc( (100% - 1200px) / 2);
		width: 421px;
    height: 375px;
		border: 1px solid #E5EAEE;
		background-color: #fff;
		border-radius: 5px;
		.login-title{
			height: 72px;
			line-height: 72px;
			font-size: 24px;
			color: #274185;
			padding-left: 21px;
			border-bottom: 1px solid #E5EAEE;
		}
		.form-box{
			padding: 0 20px;

		}
		.iconfont{
			font-size: 20px;
		}
	}
	.m-footer{
		position: absolute;
		left: calc(50% - 235px);
		bottom: 20px;
		color: #fff;
		text-align: center;
	}
}

</style>

<style lang="scss">

.login-box{
	.title{
		.fr a{
			font-size: 18px;
			color: #274185;
		}
	}
	.el-form-item.is-required .el-form-item__label:before{
		display: none;
	}
}

</style>
