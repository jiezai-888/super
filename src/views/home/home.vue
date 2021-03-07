<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center">
				<h3>购物街</h3>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	export default {
		name: 'home',
		components:{
			navbar
		}
	}
</script>

<style>
	.homenav{
		background-color: orangered;
		color: whitesmoke;
	}
</style>
