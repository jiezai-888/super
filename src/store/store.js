import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getter.js'

Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		goodslist:[]
	},
	mutations:{
		changecheck(state,payload){
			payload.checked=!payload.checked;
		},
		addcount(state,payload){
			payload.count++;
		},
		descount(state,payload){
			payload.count--;
		},
		addtocart(state,payload){
			state.goodslist.push(payload)
		}
	},
	actions:{
		addgoods(context,payload){
			return new Promise((resolve,reject)=>{
				let oldgoods =context.state.goodslist.find(function(item){
					return item.id===payload.id;
				})
				
				if(oldgoods){
					context.commit('addcount',oldgoods)
					resolve('当前商品数量加1共('+oldgoods.count+')件')
					// oldgoods.count+=1
				}else{
					payload.count=1;
					// context.state.goodslist.push(payload)
					context.commit('addtocart',payload);
					resolve('您添加了新的宝贝')
				}
			})
		},
		// changecheck(context,payload){
		// 	context.commit('changecheck',payload);
		// }
	}
})

export default store;