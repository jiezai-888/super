<template>
	<div>
		<h3>这是认证功能</h3>
		<div class="drag">
		  <div class="bg"></div>
		  <div class="text" onselectstart="return false;">请拖动滑块解锁</div>
		  <div class="btn">&gt;&gt;</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'yuanzh'
	}
</script>

<style scoped="scoped">
	   .drag{
	    width: 300px;
	    height: 40px;
	    line-height: 40px;
	    background-color: #e8e8e8;
	    position: relative;
	    margin:0 auto;
	   }
	   .bg{
	    width:40px;
	    height: 100%;
	    position: absolute;
	    background-color: #75CDF9;
	   }
	   .text{
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    text-align: center;
	    user-select: none;
	   }
	   .btn{
	    width:40px;
	    height: 38px;
	    position: absolute;
	    border:1px solid #ccc;
	    cursor: move;
	    font-family: "宋体";
	    text-align: center;
	    background-color: #fff;
	    user-select: none;
	    color:#666;
	   }
</style>
