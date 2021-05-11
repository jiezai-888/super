<template>
	<div class="goodsdetailnavbar">
		<navbar class="navbar">
			<div class="toback" slot="left" @click="toback">
				<img src="../../../assets/img/goodsdetailimg/Leftarrow.png" alt="none"/>
			</div>
			<div slot="center">
				<div class="titleitem" v-for="(item,index) in headtitle" :key="item"
				:class="{active: index === currentindex}"
				@click="titleclick(index)">
					<h3>{{item}}</h3>
				</div>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../../components/common/navbar/navbar.vue'
	export default {
		name: 'goodsdetailsnavbar',
		data() {
			return {
				// headtitle: ['商品', '评论', '详情', '推荐'],
				headtitle: ['商品', '评论', '详情'],
				currentindex:0
			}
		},
		components: {
			navbar
		},
		methods:{
			titleclick(index){
				this.currentindex=index;
				this.$emit('titleclick',index);
				// console.log("9999999")
			},
			toback(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped">
	.navbar{
		border-bottom: 0.15rem solid gainsboro;
		background-color: white;
		padding: 0.35rem 0rem;
		position: relative;
		z-index: 3;
	}
	.titleitem{
		display: inline-block;
		padding: 0rem 0.45rem;
	}
	.titleitem p{
		font-weight: bolder;
	}
	.active{
		color:orangered;
	}
	.toback{
		margin: 5px auto;
		width: 100%;
	}
	.toback img{
		width: 56%;
		margin-left: 0.3125rem;
	}
</style>
