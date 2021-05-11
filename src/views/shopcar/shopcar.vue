<template>
	<div class="shopcar">
		<navbar>
			<div slot="center" class="shopcartitle">
				<h2>购物车(<span>{{shopcarlength}}</span>)</h2>
			</div>
		</navbar>
		
		<shopcarlist />
		<shopcarbottombar />
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import shopcarlist from './shopcarlist.vue'
	import shopcarbottombar from "./shopcarbottombar.vue"


	export default {
		name: 'shopcar',
		data() {
			return {

			}
		},
		computed: {
			shopcarlength() {
				return this.$store.state.goodslist.length;
			}
		},
		activated() {
			// this.$refs.scrollorslide.scroll.refresh();
		},
		components: {
			navbar,
			shopcarlist,
			shopcarbottombar,

		}
	}
</script>

<style scoped="scoped">
	.shopcar {
		position: relative;
		/* background-color: lightblue; */
		height: 100%;
	}

	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
		letter-spacing: 2px;
	}

	.shopcartitle span {
		color: paleturquoise;
	}
</style>
