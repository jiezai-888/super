<template>
	<div class="goodsdetail">
		<goodsdetailsnavbar @titleclick="titleclick" />
		<scroll class="content" ref="scrollorslide" :pbt="probeType" :pUL="pullUpLoad">
			<goodsdetailswipe :swipeimg="swipeimg"></goodsdetailswipe>
			<div class="goodsdetailtitle">
				<goodsdetailsubtitle :jdpz="jdpz" :smallmessage="smallmessage">
				</goodsdetailsubtitle>
				<goodsbaseprice />
				<div class="goodsname">
					<h3>{{id}}</h3>
				</div>
				<discount />
				<goodsconfig ref="goodsconfig" @btnout="btnout"></goodsconfig>
				<goodsdetailcomments ref="goodsdetailcomments" />
				<goodslist ref="goodslist" :id="id" :goodsimg="swipeimg" @imgload="imgload" />
				
			</div>
			<!-- <detailconfiginf class="detailconfiginf"
			v-show="show"
			:imgurl="swipeimg[0]"
			@clicknone="clicknone"
			:class="{changetohid:active,changtoout:inactive}"/> -->
			
			<transition name="fade">
				<detailconfiginf 
				v-if="show"
				:imgurl="swipeimg[0]"
				@clicknone="clicknone"
				/>
			</transition>
		</scroll>
		<goodsdetailbottombar @addstore="addstore"></goodsdetailbottombar>
		<!-- <toast :msg="msg"></toast> -->
	</div>
</template>

<script>
	import goodsdetailsnavbar from './detailschildcomponent/goodsdetailsnavbar.vue'
	import {
		getgooddetailsimg,
		getgooddetails
	} from '../../network/goodsdetail.js'
	import goodsdetailswipe from './goodsdetailswipe.vue'
	import goodsdetailsubtitle from './detailschildcomponent/goodsdetailsubtitle.vue'
	import goodsbaseprice from '../../components/common/goodsbasedetail/goodsbaseprice.vue'
	import discount from '../../components/common/goodsbasedetail/discount.vue'

	import {
		getSessionStorage
	} from '../../components/common/sestorage/sestorage.js'
	import scroll from '../../components/common/scroll/scroll.vue'
	import detailconfiginf from './detailschildcomponent/detailconfiginf.vue'
	import goodsconfig from '../../components/common/goodsbasedetail/goodsconfig.vue'
	import goodslist from './detailschildcomponent/goodslist.vue'
	import goodsdetailcomments from './detailschildcomponent/goodsdetailcomments.vue'
	import goodsdetailbottombar from './detailschildcomponent/goodsdetailbottombar.vue'
	// import toast from'../../components/common/toast/toast.vue'
	
	export default {
		name: 'goodsdetail',
		data() {
			return {
				jdpz: '钻石品质',
				smallmessage: '品质优选，懂你所爱',
				id: {
					type: String,
					default: 'null'
				},
				price: {
					type: Number,
					default: 9999
				},
				swipeimg: [],
				probeType: 3,
				pullUpLoad: true,
				active:false,
				inactive:true,
				//决定配置页面是否显示
				hiddern:false,
				show:false,
				topy:[],
				// msg:'正在加载',
			}
		},
		created() {
			this.id = this.$route.params.title;
			this.price = getSessionStorage(this.id);

			//请求数据
			getgooddetailsimg(this.id).then(res => {
				this.swipeimg = res;
			}).catch(err => {
				console.log(err)
			})
			// this.$nextTick(()=>{
				
			// })
		},
		components: {
			goodsdetailsnavbar,
			goodsdetailswipe,
			goodsdetailsubtitle,
			goodsbaseprice,
			discount,
			scroll,
			detailconfiginf,
			goodsconfig,
			goodslist,
			goodsdetailcomments,
			goodsdetailbottombar,
			// toast,
		},
		methods:{
			clicknone(){
				this.show=false;
			},
			btnout(){
				this.show=true;
			},
			titleclick(index){
				console.log(index);
				this.$refs.scrollorslide.scroll.scrollTo(0,-this.topy[index],420);
			},
			imgload(){
				this.topy.push(0);
				this.topy.push(this.$refs.goodsconfig.$el.offsetTop);
				this.topy.push(this.$refs.goodsdetailcomments.$el.offsetTop);
				this.topy.push(this.$refs.goodslist.$el.offsetTop);
			},
			addstore(){
				const goodsparams={
					imageurl:this.swipeimg[0].imgurl,
					id:this.id,
					price:this.price,
					count:0,
					checked:true,
				}
				// this.$store.commit('addgoods',goodsparams);
				this.$store.dispatch('addgoods',goodsparams).then(res=>{
					this.$toast.show(res,3000);
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped="scoped">
	/* body{
		background-color: white;
	} */
	.goodsdetail {
		height: 100vh;
		background-color: white;
		position: relative;
		z-index: 2;
	}

	.content {
		background-color: white;
		height: 100%;
	}

	.goodsdetailtitle {
		border-top: 0.125rem solid gainsboro;
	}

	.goodsname {
		text-align: center;
	}

	.goodsname h3 {
		margin: 0.5rem;
		color: #666666;
	}
	
	.fade-enter-active{
		animation: hid 2s linear reverse;
	}
	.fadd-leave-active{
		animation: hid 2s linear;
	}
	
	@keyframes hid
	{
		0% {height:0;opacity: 0;}
		13%{transform: scale(1.2) ;}
		24%{height:94%;}
		42%{height:101%;}
		60%{height: 60%;}
		100% {height:100%;transform: scale(0) ; opacity: 0.8; background-color: black;}
	}
	
</style>
