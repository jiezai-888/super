<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center"  v-for="">
				<h3>购物街</h3>
			</div>
		</navbar>
		<homebanner/>
		<homerecommend></homerecommend>
		<tabcontrole class="tabcontrole" :titles="['流行','新款','精选']">
		</tabcontrole>
		<goodslist :goods="goods['population'].list">
		</goodslist>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import tabcontrole from '../../components/content/tabControl/tabcontrol.vue'
	import {getHomeGoodsInf} from '../../network/home.js'
	
	import homebanner from './homeBanner.vue'
	import homerecommend from './homeRecommend.vue'
	import goodslist from'../../components/content/goods/goodsList.vue'
	
	export default {
		name: 'home',
		components: {
			navbar,
			homebanner,
			homerecommend,
			tabcontrole,
			goodslist
		},
		data(){
			return{
				goods:{
					'population':{page:0,list:[]},
					'newstyle':{page:0,list:[]},
					'bestsell':{page:0,list:[]}
				}
			}
		},
		created() {
			//请求home页面商品数据
			this.getHomeGoodsData('population')
		},
		methods:{
			getHomeGoodsData(type){
				const page=this.goods[type].page+1;
				getHomeGoodsInf(type,page).then(res =>{
					console.log("==================")
					console.log(res);
					//把数据保存到list数组当中(使用push())
					this.goods[type].list.push(...res);
					this.goods[type].page+=1;
					
				}).catch(err=>{
					
				})
			}
		}
	}
</script>

<style>
	.homenav {
		background-color: orangered;
		color: whitesmoke;
	}
	.tabcontrole{
		position: sticky;
		background-color: whitesmoke;
		top:0.0005rem;
	}
</style>
