<template>
	<div class="goodspricediscount">
		<p>￥{{price}}</p>
	</div>
</template>

<script>
	export default{
		name:'goodspricediscount',
		props:{
			price:{
				type:String,
				default:'9999'
			}
			
		}
	}
</script>

<style scoped="scoped">
</style>
