<template>
	<div class="goodslist">
		<div class="confighead">
			<span></span>
			<p>商品参数如下：</p>
		</div>
		<div class="goodsinftable">
			<div class="goodsinfitem" 
			v-for="(i,attrname,index) in goodsdetailinf" >
				<h3>{{goodsconfiginf[index]}}</h3>
				<img :src="goodsimgurl[index].a"/>
				<div class="goodsinf">
					<p>{{i}}</p>
				</div>
			</div>
		</div>
		<ul>
			<li v-for="(i,index) in goodsimg" :key="index">
				<img :src="i.imgurl" alt="none" @load="imgload" />
			</li>
		</ul>
		<div class="tail">
			<p>人家也是有底线的喔~~</p>
		</div>
	</div>
</template>

<script>
	import {
		getgooddetailsinf
	} from '../../../network/goodsdetail.js'
	

	export default {
		name: 'goodslist',
		props: {
			id: {
				type: String
			},
			goodsimg:null
		},
		data() {
			return {
				goodsdetailinf: {},  
				goodsconfiginf: ['产品名称', '包装方式', '重量(kg)', '产地'],
				goodsimgurl:[
					{
						a:require("../../../assets/img/goodsdetailimg/商品.png")
					},{
						a:require("../../../assets/img/goodsdetailimg/包装.png")
					},
					{
						a:require("../../../assets/img/goodsdetailimg/024-重量.png")
					},{
						a:require("../../../assets/img/goodsdetailimg/产地直采.png")
					},
					
				],
			}
		},
		created() {
			getgooddetailsinf(this.id).then(res => {
				this.goodsdetailinf = res[0];
				// console.log(res[0])
			}).catch(err => {
				console.log(err)
			})
		},
		methods:{
			imgload(){
				//避免多次发送事件
				if(!this.isornotload){
					this.$emit('imgload');
					this.isornotload=true;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.goodslist {
		/* border: 5px solid red; */
		width: 100%;
	}
	.goodsinftable{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.goodsinfitem{
		width: 40%;
		border-radius: 20%;
		margin: 5px;
		display: inline-block;
		text-align: center;
		border: 1px solid lightgray;
	}
	.goodsinfitem h3{
		margin: 8px;
	}
	.goodsinf {
		text-overflow:ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		margin-bottom: 10px;
		margin-top: 0px;
	}
	.confighead{
		margin-left: 10px;
		margin-bottom: 20px;
		/* border: 1px solid black; */
	}
	.confighead span{
		border-left: 6px solid red;
		margin-right: 15px;
	}
	.confighead p{
		padding: 3px 6px 12px 6px;
		width: 83%;
		letter-spacing: 1px;
		border-bottom: 1px solid gray;
	}
	ul,li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	ul{
		padding-top: 22px;
		list-style: none;
		width: 100%;
		/* border: 1px solid gray;
		border-radius: 15px; */
		text-align: center;
	}
	ul>li img{
		border-radius: 10px;
		width: 90%;
	}
	.tail{
		text-align: center;
		margin-top: 15px;
		margin-bottom: 50px;
	}
</style>
