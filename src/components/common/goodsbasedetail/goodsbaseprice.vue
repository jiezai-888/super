<template>
	<div class="pricebg">
		<div class="activitytime">
			<strong>{{message}}</strong>
			<div class="ontime">
				<h5>{{timetitle}}</h5>
				<span>{{hour}}</span><p>:</p>
				<span>{{minutes}}</span><p>:</p>
				<span>{{seconds}}</span>
			</div>
		</div>
		<div class="goodsprice">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'goodsbaseprice',
		data(){
			return{
				message:'比特秒杀',
				timetitle:'距活动结束',
				hour:'',
				minutes:'',
				seconds:''
			}
		},
		created() {
			time:setInterval(this.gettime,1000)
		},
		methods:{
			gettime(){
				{
					var time=new Date();
					this.hour=time.getHours();
					this.minutes=time.getMinutes();
					this.seconds=time.getSeconds();
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.pricebg{
		
		/* background-color: deeppink; */
		background-image: linear-gradient(to right,rgba(255, 51, 153,1), rgba(255, 0, 0,1));
		border: 1px solid gainsboro;
		box-shadow: 3px 5px 2px lightgray;
		height: 4.375rem;
	}
	.activitytime strong{
		color: white;
		display: inline-block;
		padding: 0.2125rem;
		background-color: brown;
		margin-top: 1rem;
		margin-left: 1rem;
	}
	.ontime{
		float: right;
		display: inline-block;
		margin-top: 1rem;
		margin-right: 1rem;
	}
	.ontime h5{
		font-size: 0.9375rem;
		margin: 0;
	}
	.ontime span{
		display: inline-block;
		text-align: center;
		height: 1.6rem;
		width: 1.6rem;
		line-height: 1.6rem;
		border-radius: 30%;
		background-color: white;
	}
	.ontime p{
		color: white;
		font-weight: bolder;
		margin: 0rem;
	}
</style>
