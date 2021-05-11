<template>
	<div class="checkbutton">
		<div class="check">
			<img v-if="active" src="../../../assets/img/shopcar/对red.png" alt="none" />
			<img v-else src="../../../assets/img/shopcar/对.png" alt="none" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'checkbutton',
		props:{
			active:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped="scoped">
	.checkbutton{
	/* 	border: 1px solid red; */
		margin-right: 5px;
	
	}
	.check img{
		width: 25px;
	}
</style>
