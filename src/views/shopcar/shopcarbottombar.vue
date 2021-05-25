<template>
	<div class="bottombar">
		<div class="content">
			<div class="imgs" @click="selectedall(checkLength)">
				<img v-show="active" src="../../assets/img/shopcar/对red.png" alt="none" />
				<img v-show="!active" src="../../assets/img/shopcar/对.png" alt="none" />
				<div class="all">
					<span>全选</span>
				</div>
			</div>
			<div class="allprice">
				合计:￥{{totalPrice}}
			</div>
		</div>
		<div class="gobuy">
			<p>去结算({{checkLength}})</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'shopcarbottombar',
		props:{
			count:{
				type:Number,
				default:0
			},
			allprice:{
				type:String,
				default:'0.0'
			}
		},
		data(){
			return{
				active:null,
			}
		},
		methods:{
			// selectedall(value){
			// 	console.log(this.$store.state.goodslist.find(item=>!item.checked));
			// },
			selectedall(){
				if(this.$store.state.goodslist.find(item=>!item.checked)){
					this.active==true;
				}
				if(this.active==false){
					this.$store.state.goodslist.filter(item =>{
						if(item.checked==false){
							this.$store.commit('changecheck',item);
						}
					})
					this.active=!this.active;
				}else{
					// console.log('999999999999')
					this.$store.state.goodslist.filter(item =>{
						if(item.checked==true){
							this.$store.commit('changecheck',item);
						}
					})
					this.active=!this.active;
				}
			}
		},
		beforeUpdate() {
			this.isselected;
		},
		computed:{
			totalPrice(){
				return this.$store.state.goodslist.filter(item=>{
					return item.checked
				}).reduce((preValue,item)=>{
					return preValue+item.price*item.count;
				},0)
				// return 23.3;
			},
			checkLength(){
				return this.$store.state.goodslist.filter(item=>item.checked).length;
			},
			isselected(){
				if(this.$store.state.goodslist.find(item=>!item.checked)){
					this.active=false;
					return this.active;
				}else{
					this.active=true;
					return this.active;
				}
				
				// if(this.active==false){
				// 	this.$store.state.goodslist.forEach(item =>item.checked=false)
				// }else{
				// 	this.$store.state.goodslist.forEach(item =>item.checked=true)
				// }
				// if(this.checkLength!=0){
				// 	if(this.$store.state.goodslist.find(item=>!item.checked)){
				// 		this.active
				// 	}else{
				// 		this.active=!this.active; 
				// 	}
				// }
			}
		}
	}
</script>

<style scoped="scoped">
	.bottombar{
		position: fixed;
		z-index: 9999;
		bottom: 54px;
		width: 100%;
		padding: 5px;
		height: 35px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		/* border: 1px solid red; */
		justify-content: space-between;
	}
	.imgs{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: center;
		/* border: 1px solid gray; */
	}
	.imgs img{
		margin: 5px 2px;
		margin-left: 15px;
		height: 21px;
		width: auto;
	}
	.all{
		display: inline-block;
		margin: 5px 2px;
	}
	.imgs span{
		font-size: 13px;
		letter-spacing: 1px;
	}
	.allprice{
		display: inline-block;
		margin: 5px;
		margin-left: 18px;
	}
	.gobuy{
		height: 100%;
		background-color: orangered;
		border-radius: 20px;
		margin-right: 10px;
		text-align: center;
		padding-left: 10px;
		padding-right: 10px;
	}
	.gobuy p{
		color: white;
		letter-spacing: 2px;
		margin: 5px;
	}
</style>
