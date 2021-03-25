<template>
	<div id="home">
		<!-- <h1>首页</h1> -->
		<navbar class="homenav">
			<div slot="center"  v-for="">
				<h3>购物街</h3>
			</div>
		</navbar>
		<homebanner/>
		<homerecommend></homerecommend>
		<tabcontrole class="tabcontrole" :titles="['流行','新款','精选']">
		</tabcontrole>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>0</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li>0</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li></li>
			<li></li>
			<li></li>
			<li>0</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
		</ul>
	</div>
</template>

<script>
	import navbar from '../../components/common/navbar/navbar.vue'
	import tabcontrole from '../../components/content/tabControl/tabcontrol.vue'
	
	
	import homebanner from './homeBanner.vue'
	import homerecommend from './homeRecommend.vue'
	
	export default {
		name: 'home',
		components: {
			navbar,
			homebanner,
			homerecommend,
			tabcontrole
		},
		data(){
			return{
				goods:{
					'population':{page:0,list:[]},
					'newstyle':{page:0,list:[]},
					'bestsell':{page:0,list:[]}
				}
			}
		}
	}
</script>

<style>
	.homenav {
		background-color: orangered;
		color: whitesmoke;
	}
	.tabcontrole{
		position: sticky;
		background-color: whitesmoke;
		top:0.0005rem;
	}
</style>
