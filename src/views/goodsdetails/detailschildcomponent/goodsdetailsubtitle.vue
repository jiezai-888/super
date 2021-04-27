<template>
	<div class="goodsdetailsubtitle">
		<span>{{jdpz}}</span>
		<p>{{smallmessage}}</p>
	</div>
</template>

<script>
	export default{
		name:'goodsdetailsubtitle',
		props:{
			jdpz:{
				type:String,
				default:null
			},
			smallmessage:{
				type:String,
				default:null
			}
		}
	}
</script>

<style>
	.goodsdetailsubtitle{
		border-bottom:1px double orangered;
	}
	.goodsdetailsubtitle span,p{
		
		display: inline-block;
		margin-bottom: 0.0625rem;
	}
	.goodsdetailsubtitle span{
		padding: 0.24rem;
		margin-right: 0.625rem;
		color: white;
		font-weight: bolder;
		background-color: orangered;
	}
</style>
