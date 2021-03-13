<template>
	<div>
		<swiper>
			<swiper-item v-for="item in banner" :key="item.arguments">
				<a :href="item.aurl">
					<img :src="item.imgurl" alt="none">
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import{swiper,swiperItem} from '../../components/common/swiper/index.js'
	import axios from 'axios';
	import {getData} from '../../network/home.js'
	export default{
		name:'homebanner',
		data() {
			return {
				banner: []
			}
		},
		components:{
			swiper,
			swiperItem
		},
		//当homeBanner实例被创建时，就进行异步请求
		
		created() {
			//-------------------------------------
			//返回的是一个promise函数
			//注意函数一旦执行完可能被销毁，所以要把数据保存到data中
			// getData().then(
			// resdata => {
			// 	//在箭头函数中this指向其父,而不是它本身
			// 	console.log(resdata);
			// 	this.banner=resdata;
			// }
			// axios.spread(homebanner,homerecommend),
			// this.banner=homebanner
			// ).catch( er=>{
			// 	console.log(er)
			// })
			//--------------------------------------
			
			getData().banner.then(res=>{
				this.banner=res
			})
			console.log(getData().banner)
		}
	}
</script>

<style>
</style>
