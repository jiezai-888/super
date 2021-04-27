<template>
	<div class="goodslist">
		<div class="goodslistitem">
			<goodsitem class="item" v-for="(item,index) in goods"
			:src="item.imgUrl"
			:title="item.title"
			:price="item.price"
			:key="index"
			></goodsitem>
		</div>
		<!-- <div>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>f</li>
			</ul>
		</div> -->
	</div>
</template>

<script>
	import goodsitem from './goodsItem.vue'
	
	export default{
		name:'goodslist',
		props:{
			goods:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		components:{
			goodsitem
		},
		created() {
			passvaluebysestorage();
		}
	}
</script>

<style scoped="scoped">
	.goodslistitem{
		display: flex;
		flex-wrap: wrap;
		
		background-color: gainsboro;
		justify-content: space-around;
		/* margin-bottom:3.75rem; */
	}
	.goodslistitem .item{
		display: inline-block;
		width: 50%;
	}
	
</style>
