<template>
	<div class="discount">
		<div class="discountitem">
			<div class="left">
				<h3>优惠</h3>
			</div>
			<div class="right">
				<ul>
					<li v-for="i in discounttitle"><span>{{i.name}}</span>
						<p>{{i.content}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="activetype">
			<div class="left">
				<h3>活动</h3>
			</div>
			<div class="right">
				<span class="bgred">{{active.shopdiscount[0].name}}</span>
				<span class="bgblue">{{active.shopdiscount[1].name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'discount',
		data() {
			return {
				discounttitle: [{
						name: '白条新人',
						content: '6期内免息'
					}, {
						name: '领劵',
						content: '满99元减30元'
					},
					{
						name: '限购',
						content: '限购3件'
					}, {
						name: '赠品',
						content: '可挑选赠品'
					}
				],
				active: {
					shopdiscount: [{
						name: '店铺特惠',
						url: '#'
					}, {
						name: '省钱卡',
						url: '#'
					}]
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.discount {
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
	}

	.discountitem span {
		display: inline-block;
		color: red;
		background-color: rgb(255, 204, 221, 0.6);
	}

	.discount p {
		margin: 5px;
	}
	.discountitem {
		height: 9rem;
	}
	.activetype{
		height: 4rem;
		
	}
	.left {
		width: 20%;
		text-align: center;
	}
	.right {
		width: 80%;
	}
	.bgred {
		background-color: rgb(255, 204, 221, 0.4);
		border: 0.03125rem solid red;
		color: red;
	}
	.bgblue{
		background-color: rgb(204, 224, 255,0.4);
		border: 0.03125rem solid blue;
		color: rgb(77, 147, 255);
	}
	.activetype span{
		display: inline-block;
		margin:0.65rem 0.3rem;
		padding:0rem 0.1875rem;
	}
</style>
