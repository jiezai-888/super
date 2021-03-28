<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center" class="centerstyle">
				<h3>Y比特~goShop</h3>
			</div>
		</navbar>
		<scroll class="content" ref="scrollorslide">
			<homebanner/>
			<homerecommend></homerecommend>
			<tabcontrole class="tabcontrole" 
			:titles="['热销','爆款','比特优选']" 
			@tabclick="tabclick">
			</tabcontrole>
			<goodslist :goods="changetitle">
			</goodslist>
		</scroll>
	<!-- 	注意组件不能够组件监听事件，想要监听必须使用native修饰符 -->
		<toback @click.native="tobackclick"/>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import tabcontrole from '../../components/content/tabControl/tabcontrol.vue'
	import {
		getHomeGoodsInf
	} from '../../network/home.js'
	import scroll from '../../components/common/scroll/scroll.vue'

	import homebanner from './homeBanner.vue'
	import homerecommend from './homeRecommend.vue'
	import goodslist from '../../components/content/goods/goodsList.vue'
	import toback from '../../components/content/toback/toback.vue'

	export default {
		name: 'home',
		components: {
			navbar,
			homebanner,
			homerecommend,
			tabcontrole,
			goodslist,
			scroll,
			toback
		},
		data() {
			return {
				goods: {
					'population': {
						page: 0,
						list: []
					},
					'newstyle': {
						page: 0,
						list: []
					},
					'bestsell': {
						page: 0,
						list: []
					}
				},
				currenttitle: 'population'
			}
		},
		created() {
			//请求home页面商品数据
			this.getHomeGoodsData(this.currenttitle);
		},
		methods: {
			getHomeGoodsData(type) {
				const page = this.goods[type].page + 1;
				getHomeGoodsInf(type, page).then(res => {
					console.log("==================")
					console.log(res);
					//把数据保存到list数组当中(使用push())
					this.goods[type].list.push(...res);
					this.goods[type].page += 1;

				}).catch(err => {

				})
			},
			tabclick(index) {
				switch (index) {
					case 0:
						this.currenttitle = 'population'
						break
					case 1:
						this.currenttitle = 'newstyle'
						break
					case 2:
						this.currenttitle = 'bestsell'
						break
				}
				this.getHomeGoodsData(this.currenttitle);
			},
			tobackclick(){
				this.$refs.scrollorslide.scroll.scrollTo(0,0,888);
			}
			
		},
		mounted() {
			this.$EventBus.$on('imageload',()=>{
				this.$refs.scrollorslide.scroll.refresh();
			})
		},
		computed: {
			changetitle() {
				return this.goods[this.currenttitle].list;
			}
		}
	}
</script>

<style scoped>
	#home{
		height: 100vh;
	}
	.homenav {
		border-top: 2px solid firebrick;
		border-bottom: 1px solid firebrick;
		height: 3.3rem;
		position: relative;
		width: 100%;
		z-index: 1;
		background-color: firebrick;
		color: whitesmoke;
	}
	.centerstyle{
		margin-top: 0.32rem;
		height: 70%;
		border-radius: 50%;
		border: 0.23rem solid white;
		box-shadow: 5px -3px 0.00625rem black;
		font-style: italic;
		font-family: "century gothic";
	}

	.tabcontrole {
		position: sticky;
		background-color: whitesmoke;
		top:0.0625rem;
	}
	
	.content{
		height: 34.0rem;
		overflow: hidden;
	}
</style>
