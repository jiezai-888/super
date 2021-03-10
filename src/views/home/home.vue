<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center"  v-for="">
				<h3>购物街</h3>
			</div>
		</navbar>
		<swiper>
			<swiper-item v-for="item in banner">
				<a href="#">
					<img :src="item" alt="none">
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import {getHomeMultidata} from '../../network/home.js' 
	import{swiper,swiperItem} from '../../components/common/swiper/index.js'
	
	export default {
		name: 'home',
		components: {
			navbar,
			swiper,
			swiperItem
		},
		data() {
			return {
				banner: []
			}
		},
		//当home实例被创建时，就进行异步请求
		created() {
			//返回的是一个promise函数
			//注意函数一旦执行完可能被销毁，所以要把数据保存到data中
			getHomeMultidata().then(resdata => {
				//在箭头函数中this指向其父,而不是它本身
				console.log(resdata);
				this.banner=resdata;
			})
		}
	}
</script>

<style>
	.homenav {
		background-color: orangered;
		color: whitesmoke;
	}
</style>
