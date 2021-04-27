<template>
	<div class="goodsstage" @click="setsestorage(title,price)">
		<div class="goodsitem" @click="goodsitemclick">
			<div>
				<img :src="src" @load="imageload" />
			</div>
			<div class="goodstitle">
				<h4>{{title}}</h4>
				<h6>价格：</h6>
				<span>￥{{price}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {setSessionStorage} from '../../common/sestorage/sestorage.js'
	
	export default {
		name: 'goodsitem',
		props: {
			src: {
				type: String,
				default: '#'
			},
			//title也是商品id
			title: {
				type: String,
				default: 'null'
			},
			price: {
				type: String,
				default: 'null'
			}
		},
		methods: {
			imageload() {
				this.$EventBus.$emit('imageload');
			},
			goodsitemclick(){
				this.$router.push('/goodsdetail/'+this.title);
			},
			setsestorage(key,value){
				setSessionStorage(key,value);
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsitem {
		border: 1px solid lightgray;
		text-align: center;
		border-radius: 5%;
	}

	.goodsitem img {
		width: 90%;
		margin-top: 0.35rem;
	}

	.goodstitle {
		margin-top: 0.1125rem;
		margin-bottom: 0.2rem;
	}

	.goodstitle h4,
	h6 {
		margin: 0.1275rem;
	}

	.goodstitle h6 {
		color: red;
		display: inline-block;
	}

	.goodstitle span {
		font-weight: bold;
	}
</style>
