<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item"
		:class="{active:index===currentIndex}"
		@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'tabcontrol',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index;
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 0.9375rem;
		font-weight: bold;
	}
	.tab-control-item{
		flex: 1;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.active{
		color: var(--color-high-text);
	}
	.active span{
		padding: 0.3125rem;
		border-bottom: 3px solid var(--color-high-text);
	}
</style>
