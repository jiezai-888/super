<template>
	<div class="goodsconfig">
		<div class="goodsconf">
			<div class="left">
				<h3>已选</h3>
			</div>
			<div class="middle">
				<p>{{color}},{{version}},{{waybypurchase}},可选服务</p>
				<span>
					<img src="../../../assets/img/goodsdetailimg/礼物.png" alt="none"/>
					礼物送给TA >
				</span>
			</div>
			<div class="right" @click.prevent="btnout">
				<img src="../../../assets/img/goodsdetailimg/省略.png" alt="none"/>
			</div>
		</div>
		<div class="address">
			<div class="left"><h3>送至</h3></div>
			<div class="middle">
				<span>
					<img src="../../../assets/img/goodsdetailimg/定位.png" alt="none" />
					<p>广东佛山市三水区乐平镇广东省佛山市...</p>
				</span>
				<p>
					<strong>现货</strong>,23:10前下单，预计明天送达，请您耐心等待。
				</p>
			</div>
			<div class="right">
				<img src="../../../assets/img/goodsdetailimg/省略.png" alt="none"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'goodsconfig',
		props:{
			color:{
				type:String,
				default:'白色'
			},
			version:{
				type:String,
				default:'标准版'
			},
			waybypurchase:{
				type:String,
				default:'普通'
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			btnout(){
				this.$emit('btnout');
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsconfig{
		border-top: 1px solid gainsboro;
		padding-bottom: 25px;
	}
	.goodsconf{
		width: 100%;
		padding-bottom: 23px;
		padding-top: 23px;
	}
	.goodsconf div{
		
		/* border: 1px solid salmon; */
		height: 100%;
		display: inline-block;
		padding-bottom: 20px;
	}
	.goodsconf p,h3,span{
		margin: 0;
		padding: 0;
	}
	.address div{
		display: inline-block;
		padding-bottom: 20px;
		/* border: 1px solid salmon; */
	} 
	.address p,h3,span{
		margin: 0;
		padding: 0;
	}
	.address p,img{
		display: inline-block;
	}
	.left{
		text-align: center;
		width: 20%;
		/* border: 1px solid salmon; */
	}
	.middle{
		width: 60%;
		border-bottom: 1px solid gainsboro;
	}
	.right{
		width: 20%;
		text-align: center;
		/* border: 1px solid salmon; */
	}
	.middle img{
		width: 22px;
		margin-right: 10px;
	}
	.middle span{
		display: block;
		display: flex;
		align-items: center;
		color: red;
		font-weight: bold;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.middle p{
		letter-spacing: 2px;
	}
	.right img{
		width: 25px;
	}
</style>
