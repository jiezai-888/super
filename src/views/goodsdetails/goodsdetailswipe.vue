<template>
	<div class="goodsdetailswipe">
		<swiper>
			<swiperitem v-for="(item,index) in swipeimg" :key="index">
				<img :src="item.imgurl" alt="none" />
			</swiperitem>
		</swiper>
	</div>
</template>

<script>
	import swiper from '../../components/common/swiper/swiper.vue'
	import swiperitem from '../../components/common/swiper/swiperItem.vue'
	
	export default{
		name:'goodsdetailswipe',
		props:{
			swipeimg:{
				type:Array,
				default(){
					return [];
				}
			}
		},
		components:{
			swiper,
			swiperitem
		},
		methods:{
			// imgload(){
			// 	//避免多次发送事件
			// 	if(!this.isornotload){
			// 		this.$emit('imgload');
			// 		this.isornotload=true;
			// 	}
			// }
		}
	}
</script>

<style>
</style>
