<template>
	<div class="bottombar">
		<!-- <h2>底部导航栏</h2> -->
		<div class="kefu">
			<i class="kefuimg"></i>
			<span>客服</span>
		</div>
		<div class="shouc">
			<i class="shoucimg"></i>
			<span>收藏</span>
		</div>
		<div class="addstore" @click="addstore">
			<p>加入购物车</p>
		</div>
		<div class="buy">
			<p>立即购买</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'goodsdetailbottombar',
		methods:{
			addstore(){
				this.$emit('addstore');
			}
		}
	}
</script>

<style scoped="scoped">
	.bottombar{
		
		width: 100%;
		height: 45px;
		padding-top: 1px;
		padding-bottom: 1px;
		background-color: white;
		position: fixed;
		z-index: 999;
		bottom: 0;
		display: flex;
		border-radius: 12px 12px 0px 0px;
		border-top: 0.03rem solid gainsboro;
		justify-content: space-between;
		align-items: center;
	}
	.bottombar div{
		display: inline-block;
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.kefu{
	}
	.kefu i{
		/* border: 1px solid black; */
		width: 23px;
		height: 23px;
		background-image: url(../../../assets/img/bottombar/客服.png);
		background-size: 100%;
		background-position: 100% 100%;
	}
	.kefu span{
		display: block;
		color: dimgrey;
		font-size: 15px;
		margin-left: 5px;
		letter-spacing: 1px;
	}
	.shouc span{
		display: block;
		font-size: 15px;
		letter-spacing: 1px;
		margin-left: 5px;
		color: orangered;
	}
	.shoucimg{
		width: 25px;
		height: 25px;
		background-image: url(../../../assets/img/bottombar/收%20藏.png);
		background-size: 100%;
		background-position: 100% 100%;
	}
	.addstore{
		border-radius: 12px;
		text-align: center;
		background-color: orange;
		margin-right: 3px;
	}
	.addstore p{
		margin: 0;
		font-size: 15px;
		letter-spacing: 1px;
	}
	.buy{
		border-radius: 12px;
		background-color: orangered;
		color: white;
		
	}
	.buy p{
		margin: 0;
		font-size: 15px;
		letter-spacing: 2px;
	}
</style>
