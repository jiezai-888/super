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
		props:{
			pbt:{
				type:Number,
				default:0
			}
		},
		mounted() {
			this.scroll=new BetterScroll(this.$refs.slide,{
					movable:true,
					click:true,
					mouseWheel:true,
					probeType:this.pbt, //一直设置为3会影响性能,不能实时监听
					// eventPassthrough:'horizontal',
					pullUpLoad:true
				});
			
			this.scroll.on('scroll',(position)=>{
				this.$emit('scrollpos',position);
			})
			
			this.scroll.on('pullingUp',() => {
				console.log('上拉加载更多')
				//到底后发送网络请求，请求更多的数据
				//等待数据请求完成，并且将新的数据展示出来
				
				//到底后结束一次下拉事件
				this.scroll.finishPullUp();
			});
		},
		methods:{
			tobackclick(x,y,timeout=888){
				this.scroll.scrollTo(x,y,timeout);
			}
		}
	}
</script>

<style>
</style>
