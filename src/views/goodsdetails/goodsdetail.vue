<template>
	<div class="goodsdetail">
		<goodsdetailsnavbar />
		<h3>{{id}}</h3>
	</div>
</template>

<script>
	import goodsdetailsnavbar from './detailschildcomponent/goodsdetailsnavbar.vue'
	import {getgoodsinf} from '../../network/goodsdetail.js'
	 
	export default{
		name:'goodsdetail',
		data(){
			return{
				id: {
					type: String,
					default: 'null'
				}
			}
		},
		created() {
			this.id=this.$route.params.title;
			//请求数据
			getgoodsinf(this.id).then(res =>{
				
			}).catch(err =>{
				
			})
		},
		components:{
			goodsdetailsnavbar
		}
	}
</script>

<style scoped="scoped">
	body{
		background-color: white;
	}
</style>
