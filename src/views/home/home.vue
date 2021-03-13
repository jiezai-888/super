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
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import homebanner from './homeBanner.vue'
	import homerecommend from './homeRecommend.vue'
	
	
	export default {
		name: 'home',
		components: {
			navbar,
			homebanner,
			homerecommend
		}
	}
</script>

<style>
	.homenav {
		background-color: orangered;
		color: whitesmoke;
	}
</style>
