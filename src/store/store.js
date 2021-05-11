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
		addtocart(state,payload){
			state.goodslist.push(payload)
		}
	},
	actions:{
		addgoods(context,payload){
			let oldgoods =context.state.goodslist.find(function(item){
				return item.id===payload.id;
			})
			
			if(oldgoods){
				context.commit('addcount',oldgoods)
				// oldgoods.count+=1
			}else{
				payload.count=1;
				// context.state.goodslist.push(payload)
				context.commit('addtocart',payload);
			}
		},
		// changecheck(context,payload){
		// 	context.commit('changecheck',payload);
		// }
	}
})

export default store;