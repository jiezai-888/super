<template>
	<div class="homerecommend">
		<div class="homerecommend-item" v-for="item in recommends" :key="item.arguments">
			<a :href="item.aurl">
				<img :src="item.imgurl" alt="none">
				<div class="describeText">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	import {getData} from '../../network/home.js'
	export default{
		name:'homeRecommend',
		data(){
			return{
				recommends:[]
			}
		},
		created() {
			getData().recommend.then(res=>{
				this.recommends=res
			})
			console.log(getData().recommend)
		}
	}
</script>

<style scoped="scoped">
	.homerecommend{
		display: flex;
		text-align: center;
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		margin-top: 0.3125rem;
		border-bottom: 5px solid #eee;
	}
	.homerecommend-item{
		flex: 1;
		border-left: 1px #666666 solid;
		border-right: 0.5px #666666 solid;
	}
	.homerecommend-item img{
		width: 70%;
	}
	.describeText{
		font-size: 0.75rem;
	}
</style>
