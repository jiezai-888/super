<template>
	<div :class="{tochoose:true}">
		<div class="pos">
			<span @click.prevent="clicknone">&times;</span>
			<div class="goodscontent">
				<div class="goodsimg">
					<img v-if="imgurl" :src="imgurl.imgurl"/>
				   <div>
					   <goodspricediscount class="goodsprice" />
					   <p>白条专享24期免利息,每期可节省5.99元</p>
				   </div>
				</div>
				<div class="goodsdetal">
				<!-- 	<ul v-for="(item,index) in configinf" :key="index">
						<h5>{{index}}</h5>
						<li v-for="(i,secondindex) in item" 
						:class="changestyle(i,secondindex,index)"
						@click.prevent="clickchangeindex(i,secondindex,index)" 
						:key="secondindex">{{i}}</li>
					</ul> -->
					<ul>
						<h5>颜色</h5>
						<li v-for="(i,index) in color"
						 :class="changestyle(index)"
						 @click="clickchangeindex(index)">{{i}}</li>
					</ul>
					<ul>
						<h5>版本</h5>
						<li v-for="(i,index) in version"
						 :class="changestyle2(index)"
						 @click="clickchangeindex2(index)">{{i}}</li>
					</ul>
					<ul>
						<h5>购买方式</h5>
						<li v-for="(i,index) in waybypurchase"
						 :class="changestyle3(index)"
						 @click="clickchangeindex3(index)">{{i}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import goodspricediscount from '../../../components/common/goodsbasedetail/goodspricediscount.vue'
	export default{
		name:'detailconfiginf',
		props:{
			imgurl:null,
			// clickhidden:{
			// 	type:Function
			// }
		},
		data(){
			return{
				color:['白色','黑色','蓝色','粉色'],
				version:['标准版','旗舰版','ProMax'],
				waybypurchase:['普通','白条/花呗','PLUS专享版'],
				// configinf:{
				// 	颜色:['白色','黑色','蓝色','粉色'],
				// 	版本:['标准版','旗舰版','ProMax'],
				// 	购买方式:['普通','白条/花呗','PLUS专享版']
				// },
				currentindex:0,
				currentindex2:0,
				currentindex3:0,
				currenttitle:null,
				oldvalue:{},
				count:0,
				// active:false,
				st:null
			}
		},
		components:{
			goodspricediscount
		},
		// watch:{
		// 	currentindex:function(newv,oldv){             
		// 		console.log('new'+newv);
		// 		console.log('old'+oldv);
				
		// 	}
		// },
		methods:{
			
			// clickchangeindex(title,i,purchaseway){
			// 	this.oldvalue[purchaseway]=title;
			// 	this.currentindex=i;
			// 	this.currenttitle=title;
			// 	this.cs();
			// },
			clickchangeindex(index){
				this.currentindex=index;
			},
			clickchangeindex2(index){
				this.currentindex2=index;
			},
			clickchangeindex3(index){
				this.currentindex3=index;
			},
			cs(){
				console.log("hahaha!");
				// this.oldvalue.classList.add("active");
			},
			// changestyle(title,index,property){
				
			// 	return [this.currentindex ===index&&
			// 	this.currenttitle===title?
			// 	'active':''];
			// },
			changestyle(index){
				return this.currentindex===index?'active':'';
			},
			changestyle2(index){
				return this.currentindex2===index?'active':'';
			},
			changestyle3(index){
				return this.currentindex3===index?'active':'';
			},
			clicknone(){
				this.$emit('clicknone')
				// this.active=true;
			}
		}
	}
</script>

<style scoped="scoped">
	.tochoose{
		border-top: 0.02rem solid grey;
		position: fixed;
		/* bottom: 0px; */
		top:200px;
		width: 100%	;
		height: 100%;
		border-radius: 15px;
		background-color: white;
	}
	.pos{
		position: relative;
	}
	
	/* .changetochoose{
		height: 0;
		animation: myfirst 2s linear;
	}
	@keyframes myfirst
	{
		0% {height:100%;opacity: 1;}
		13%{transform: scale(1.2) ;}
		24%{height:94%;}
		42%{height:101%;}
		60%{height: 60%;}
		100% {height:0%;transform: scale(0) ; opacity: 0.5; background-color: black;}
	} */
	
	span{
		position: relative;
		display: inline-block;
		left: 90%;
		top: 0;
		font-size: 32px;
		color: gray;
	}
	.goodsimg{
		display: flex;
		align-items: center;
		width: 100%;
		/* border: 1px solid red; */
	}
	.goodsprice{
		color: red;
		font-size: 19px;
		font-weight: bold;
		margin-left:40px;
		display: inline;
		/* border: 1px solid red; */
	}
	.goodsimg p{
		margin-left:40px;
		margin-right: 10px;
		margin-top: 0;
		font-size: 13px;
		color: orangered;
	}
	.goodsimg img{
		width: 88px;
		margin-left: 20px;
		border-radius: 20px;
	}
	.goodsdetal{
		padding-bottom: 92px;
	}
	.goodsdetal h5{
		font-size: 17px;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.goodsdetail li{
		text-align: center;
		margin-left: 15px;
		margin-top: 5px;
		margin-bottom: 5px;
		letter-spacing: 0px;
		display: inline-block;
		list-style: none;
		border: 1px solid red;
		padding: 3px 20px;
		border-radius: 25px;
	}
	.active {
		background-color: red;
		color: white;
		font-weight: bold;
		opacity: 0.7;
	}
</style>
