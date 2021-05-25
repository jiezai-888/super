<template>
	<div class="registe">
		<form class="registeform"
		 action="">
			
		
			<div class="container">
				<label><b>用户名</b></label>
				<input type="text" placeholder="请输入用户名" name="username" required
				v-model.lazy="username" />
		
				<label><b>地址</b></label>
				<input type="text" placeholder="请输入个人地址" name="address" required
				v-model.lazy="address" />
				
				<label><b>密码</b></label>
				<input type="password" placeholder="请输入密码" name="password" required
				v-model.lazy="userpsd"  />
				
				<button class="submit" @click.prevent="btnsubmit">提交</button>
				<input type="checkbox" checked="checked"> 记住我
				<span class="goregiste">还未注册?<strong>点击这里</strong></span>
			</div>
		
			<div class="container">
				<input type="button" value="注册" />
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		name:'registe'
	}
</script>

<style scoped="scoped">
	
</style>
