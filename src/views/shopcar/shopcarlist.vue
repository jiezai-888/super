<template>
	<div class="shopcarlist">
			<div class="goodsitem"
			 v-if="goodslist && goodslist.length!=0">
			 	<div class="onegoods" v-for="item in goodslist" :key="item.id">
					<div class="chooseitem">
						<checkbutton :active="item.checked"
						@click.native="checkchange(item)"></checkbutton>
					</div>
					<div class="goodsimg">
						<img :src="item.imageurl" alt="none" />
					</div>
					<div class="goodsinf">
						<div class="goodsname">
							<p>{{item.id}}</p>
						</div>
						<div class="goodsinf">
							<div class="pos">
								<div class="goodsprice">
									<span>￥<strong>{{item.price}}</strong></span>
								</div>
								<div class="goodscount">
									<span @click="des(item.count,item)">-</span>
									<!-- <span>x</span> -->
									<strong>{{item.count}}</strong>
									<span @click="add(item)">+</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="notgoods">
				<div>
					<h4>哈哈哈！购物车中还没有你喜爱的宝贝，快去添加吧!</h4>
				</div>
			</div>
	</div>
</template>

<script>
	import checkbutton from "../../components/content/checkbutton/checkbutton.vue"
	
	export default{
		name:'shopcarlist',
		data(){
			return{
				goodslist:this.$store.state.goodslist,
				// probeType: 3,
				// pullUpLoad: true,
				// ischecked:false,
			}
		},
		components:{
			checkbutton,
			scroll,
			
		},
		methods:{
			checkchange(value,item){
				// console.log(value.checked);
				// console.log(this.$state.goodslist.check)
				// this.$store.commit('changecheck',value);
				// console.log(this.$state.goodslist.check)
				this.$store.commit('changecheck',value);
			},
			des(value,item){
				if(Number(value)==1){
					return;
				}else{
					this.$store.commit('descount',item);
				}
			},
			add(item){
				this.$store.commit('addcount',item);
			}
		},
		
	}
</script>

<style scoped="scoped">
	.shopcarlist{
		margin-left: 2px;
		margin-right: 2px;
		margin-bottom: 80px;
	}
	.goodsitem{
		padding-bottom: 50px;
		width: 100%;
	}
	.onegoods{
		padding: 10px;
		margin-top: 15px;
		margin-bottom: 10px;
		border-radius: 18px;
		box-shadow: 1px 1px 2px gray;
		/* border: 1px solid gray; */
		background-color: white;
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.chooseitem{
		margin-top: 45px;
	}
	.goodsimg img{
		border-radius: 10px;
		height: 95px;
		width: auto;
	}
	.goodsimg{
		margin: 10px;
		display: inline-block;
	}
	.goodsinf{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.goodsinf .goodsname{
	}
	.pos{
		display: flex;
		justify-content: space-between;
		align-content: center;
		width: 100%;
	}
	.goodsinf .goodsprice,.goodscount{
		/* border: 1px solid red; */
		padding: 5px;
		display: inline-block;
	}
	.goodsprice{
		color: red;
	}
	.goodsprice strong{
		font-size: 22px;
	}
	.goodscount{
		font-size: 18px;
	}
	.goodscount span{
		padding:0px 13px 0px 13px;
		color: seagreen;
		font-weight: bold;
		font-size: 23px;
	}
	.goodscount strong{
		border-radius: 12px;
		padding:0px 12px 0px 12px;
		background-color: bisque;
	}
	.notgoods{
		margin-top: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.notgoods>div{
		width: 80%;
		text-align: center;
		border-radius: 50%;
		padding: 10px;
		border: 1px solid darkgray;
	}
	.notgoods h4{
		padding: 0;
		color: pink;
	}
</style>
