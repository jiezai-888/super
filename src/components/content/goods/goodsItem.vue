<template>
	<div class="goodsstage">
		<div class="goodsitem">
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
	export default {
		name: 'goodsitem',
		props: {
			src: {
				type: String,
				default: '#'
			},
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
				this.$EventBus.$emit('imageload')
			}
		}
	}
</script>

<style>
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
