<template>
	<div v-if="active" class="login">
			<!-- <div @click="togo">点击跳转</div> -->
		<form class="modal-content animate"
		 action="/user/login">
			<div class="imgcontainer">
				<span @click="isshow()" class="close" title="Close Modal">&times;</span>
				<img src="../../assets/img/aboutme/头像.png" alt="none" class="touxiang">
			</div>

			<div class="container">
				<label><b>用户名</b></label>
				<input type="text" placeholder="请输入用户名" name="username" required
				v-model.lazy="username" />

				<label><b>密码</b></label>
				<input type="password" placeholder="请输入密码" name="password" required
				v-model.lazy="userpsd"  />
				
				<button class="submit" @click.prevent="btnsubmit">登陆</button>
				<input type="checkbox" checked="checked"> 记住我
				<span class="goregiste" @click="goregiste">还未注册?<strong>点击这里</strong></span>
			</div>

			<div class="container">
				<button type="button" 
					class="cancelbtn" @click="cancel">取消</button>
				<span class="psw">Forgot <a href="#">password?(忘记密码)</a></span>
			</div>
		</form>
	</div>
</template>

<script>
	import {login} from '../../network/goodsdetail.js'
	import md5 from 'blueimp-md5'
	
	export default {
		name: 'login',
		data(){
			return{
				active:true,
				username:null,
				userpsd:null
			}
		},
		methods: {
			isshow() {
				this.active=false;
			},
			btnsubmit(){
				this.active=!this.active;
				
				//进行加密
				const salt='as0p34';
				this.username=this.username+salt;
				this.userpsd=this.userpsd+salt;
				console.log("加密加盐后的数据");
				console.log(md5(this.username),md5(this.userpsd));
				
				// login(this.username,this.userpsd);
				login(md5(this.username),md5(this.userpsd));
			},
			goregiste(){
				this.active=false;
				this.$emit('goregiste',this.active);
			},
			cancel(){
				this.$emit('cancel',this.active);
				this.active=!this.active;
			}
		}
	}
</script>

<style scoped="scoped">
	.login{
		height: 100%;
		width: 100%;
		background-color: white;
	}
	input[type=text],
	input[type=password] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}
	
	.submit{
		letter-spacing: 5px;
		font-size: 20px;
	}
	.goregiste{
		float: right;
	}
	.goregiste strong{
		color: red;
	}

	button {
		background-color: gray;
		color: white;
		padding: 14px 20px;
		margin: 10px 0;
		letter-spacing: 2px;
		border: none;
		cursor: pointer;
		width: 100%;
	}

	button:hover {
		opacity: 0.8;
	}

	.cancelbtn {
		width: auto;
		padding: 8px 15px;
		background-color: orangered;
	}

	.imgcontainer {
		text-align: center;
		margin: 24px 0 12px 0;
		position: relative;
	}

	img.touxiang {
		width: 28%;
		border-radius: 50%;
	}

	.container {
		padding: 25px;
	}

	span.psw {
		float: right;
		padding-top: 16px;
	}

	.modal {
		display: none;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
		padding-top: 60px;
	}

	.modal-content {
		background-color: #fefefe;
		margin: 15% auto 1% auto;
		width: 95%;
	}


	.close {
		position: absolute;
		right: 25px;
		top: 0;
		color: gray;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: red;
		cursor: pointer;
	}

	.animate {
		-webkit-animation: animatezoom 0.6s;
		animation: animatezoom 0.6s
	}

	@-webkit-keyframes animatezoom {
		from {
			-webkit-transform: scale(0)
		}

		to {
			-webkit-transform: scale(1)
		}
	}

	@keyframes animatezoom {
		from {
			transform: scale(0)
		}

		to {
			transform: scale(1)
		}
	}

	@media screen and (max-width: 300px) {
		span.psw {
			display: block;
			float: none;
		}

		.cancelbtn {
			width: 100%;
		}
	}
</style>
