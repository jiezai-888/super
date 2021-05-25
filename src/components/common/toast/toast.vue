<template>
<div class="toast" v-show="active">
	<p>{{msg}}</p>
</div>
</template>

<script>
	export default{
		name:'toast',
		props:{
		},
		data(){
			return{
				msg:'',
				active:false
			}
		},
		methods:{
			show(msg="这里是默认值",duration=2500){
				this.active=true;
				this.msg=msg;
				setTimeout(()=>{
					this.active=false;
					this.msg='';
				},duration)
			}
		}
	}
</script>

<style scoped="scoped">
	.toast{
		text-align: center;
		position: fixed;
		/* border: 10px solid red; */
		top: 50%;
		left: 50%;
		z-index: 9999;
		margin: 15px;
		border-radius: 8px;
		transform: translate(-50%,-50%);
		color: white;
		background-color: rgba(0,0,0,.6);
	}
	.toast p{
		font-size: 20px;
		letter-spacing: 1px;
		margin: 5px;
	}
</style>
