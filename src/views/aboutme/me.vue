<template>
  <div>
  	<!-- <h1>我的</h1> -->
	<login v-if="active" @goregiste="goregiste" @cancel="cancel">
		
	</login>
	<div class="mecontent" v-show="outactive">
		<h3>个人空间</h3>
		<div class="txout">
			<div class="tx"><img src="../../assets/img/tabbar/meorange.png" /></div>
		</div>
		<div class="name"><span>xiaomi</span></div>
		<div class="sex">女</div>
		<div class="address">广东湛江</div>
		<div></div>
	</div>
	<!-- <registe v-else>
		
	</registe> -->
  </div>
</template>

<script>
	import login from './login.vue'
	import registe from './registe.vue'
	
  export default{
    name:'me',
	components:{
		login,
		registe
	},
	data(){
		return{
			active:true,
			outactive:true,
		}
	},
	methods:{
		goregiste(value){
			this.active=!this.active;
			
		},
		cancel(value){
			this.activeout=false;
		}
	}
  }
</script>

<style scoped="scoped">
	.mecontent{
		text-align: center;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		/* align-items: center; */
	}
	.txout{
		width: 100%;
	}
	.tx{
		margin: 15px;
		width: 45px;
		height: 45px;
		padding: 10px;
		display: inline-block;
		border: 2px solid gainsboro;
		border-radius: 50%;
	}
	.tx img{
		width: auto;
		height: 45px;
	}
	.name{
		margin: 5px;
		width: 65%;
		padding: 5px;
		border-radius: 5px;
		background-color: #B0E0E6;
		color: white;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.sex{
		margin: 5px;
		width: 65%;
		padding: 5px;
		border-radius: 5px;
		background-color: #B0E0E6;
		color: white;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.address{
		margin: 5px;
		width: 65%;
		padding: 5px;
		border-radius: 5px;
		background-color: #B0E0E6;
		color: white;
		font-weight: bold;
		letter-spacing: 2px;
	}
</style>
