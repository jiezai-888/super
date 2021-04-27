<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center" class="centerstyle">
				<h3>Y比特~goShop</h3>
			</div>
		</navbar>
		<tabcontrole class="tabcontrole"
		:titles="['热销','爆款','比特优选']" 
		@tabclick="tabclick"
		ref="tabcontrole"
		:class="{isceilinglamp:ionceilinglamp}"
		v-show="ionceilinglamp">
		</tabcontrole>
		<scroll class="content" ref="scrollorslide" 
		:pbt="probeType" 
		@scrollpos="scrposition"
			:style="{height:getpageheight}" 
			:pUL="pullUpLoad" 
			@uploadmore="uploadmore">
			<homebanner @imgload="imageload" />
			<homerecommend></homerecommend>
			<tabcontrole class="tabcontrole" 
			:titles="['热销','爆款','比特优选']" 
			@tabclick="tabclick"
			ref="tabcontrole"
			>
			</tabcontrole>
			<goodslist :goods="changetitle">
			</goodslist>
			<div>人家是有底线的wow!!!</div>
		</scroll>
		<!-- 	注意组件不能够组件监听事件，想要监听必须使用native修饰符 -->
		<toback v-show="showornotshow" @click.native="tobacktip" />

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
				currenttitle: 'population',
				probeType: 3,
				showornotshow: false,
				pullUpLoad: true,
				tabcontroletop:0,
				ionceilinglamp:false,
				scrY:0
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
			tobacktip() {
				this.$refs.scrollorslide.tobackclick(0, 0, 999);
			},
			scrposition(position) {
				this.showornotshow = Math.abs(position.y) > 788 ? true : false;
				//吸顶灯
				this.ionceilinglamp= Math.abs(position.y)>this.tabcontroletop?true:false;
			},
			uploadmore() {
				// console.log('上拉加载更更多多')
				this.getHomeGoodsData(this.currenttitle);
				this.$refs.scrollorslide.finishPullUp();
			},
			imageload(){
				//图片加载比较慢，特别是大图片
				//所以要获取准确的距离需要监听图片的加载
				this.tabcontroletop=this.$refs.tabcontrole.$el.offsetTop;
				// console.log("++++++++")
				// console.log(this.tabcontroletop)
			}
		},
		mounted() {
			this.$EventBus.$on('imageload', () => {
				this.$refs.scrollorslide.scroll.refresh();
			});
			//拿到一个组件对象,获取组件中的元素用$el
			// let top=this.$refs.tabcontrole.$el.offsetTop;
			// console.log("++++++++")
			// console.log(top)
		},
		activated() {
			// console.log("99999999999999")
			// const scy=this.$refs.scrollorslide.scrollY;
			// console.log(scy);
			//出现同步刷新的问题
			this.$refs.scrollorslide.scroll.scrollTo(0,this.scrY,0);
			this.$refs.scrollorslide.scroll.refresh();
		},
		deactivated() {
			this.scrY=this.$refs.scrollorslide.scroll.y;
		},
		computed: {
			changetitle() {
				return this.goods[this.currenttitle].list;
			},
			getpageheight() {
				// console.log(document.documentElement.clientHeight);
				let pageheight = document.documentElement.clientHeight || document.body.clientHeight;
				pageheight -= 100;
				return pageheight + 'px';
			}
		}
	}
</script>

<style scoped="scoped">
	#home {
		height: 100vh;
	}

	.homenav {
		border-top: 2px solid firebrick;
		border-bottom: 1px solid firebrick;
		height: 3.3rem;
		/* position: relative; */
		width: 100%;
		/* z-index: 1; */
		background-color: firebrick;
		color: whitesmoke;
	}

	.centerstyle {
		margin-top: 0.32rem;
		height: 70%;
		border-radius: 50%;
		border: 0.23rem solid white;
		box-shadow: 5px -3px 0.00625rem black;
		font-style: italic;
		font-family: "century gothic";
	}

	.tabcontrole {
		background-color: whitesmoke;
		/* top: 0.0625rem; */
	}
	
	.isceilinglamp{
		position: fixed;
		width: 100%;
		z-index: 1;
		top: 3.45rem;
	}

	.content {
		/* height: 33.5rem; */
		overflow: hidden;
	}
</style>
