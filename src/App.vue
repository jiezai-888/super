<template>
  <div id="app">
 <keep-alive exclude="goodsdetail">
	   <router-view></router-view>
  </keep-alive>
  <main-tabbar class="maintabbar"></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar/maintabbar.vue'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
	/* 导入base样式表 */
	@import url("./assets/css/base.css");
	.maintabbar{
		/* position: absolute;
		z-index: 999; */
		bottom: 0;
	}
</style>
