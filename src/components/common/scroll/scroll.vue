<template>
	<div ref="slide">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll'
	
	export default{
		name:'scroll',
		data(){
			return{
				scroll:null
			}
		},
		mounted() {
			this.scroll=new BetterScroll(this.$refs.slide,{
					movable:true,
					click:true,
					// eventPassthrough:'horizontal',
					pullUpLoad:true
				});
			
			this.scroll.on('pullingUp',() => {
				console.log('上拉加载更多')
				//到底后发送网络请求，请求更多的数据
				//等待数据请求完成，并且将新的数据展示出来
				
				//到底后结束一次下拉事件
				this.scroll.finishPullUp();
			})
		}
	}
</script>

<style>
</style>
