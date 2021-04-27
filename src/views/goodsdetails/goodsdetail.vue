<template>
	<div class="goodsdetail">
		<goodsdetailsnavbar />
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
			</div>

		</scroll>
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
				pullUpLoad: true

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
		},
		components: {
			goodsdetailsnavbar,
			goodsdetailswipe,
			goodsdetailsubtitle,
			goodsbaseprice,
			discount,
			scroll
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
</style>
