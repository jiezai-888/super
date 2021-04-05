import {
	instance1,
	instance2
} from "./request.js"
import axios from 'axios';

// export function getHomeMultidata(){
// 	return instance1({
// 		url:'/readImage'
// 	})
// }

// export function gethomeRecommendData(){
// 	return instance2({
// 		url:'/readhomeRecommend'
// 	})
// }

export function getData() {
	const i1 = instance1({
		url: '/readImage'
	}).then(res => {
		return res;
	});
	
	const i2 = instance2({
		url: '/readhomeRecommend'
	}).then(res => {
		return res;
	});
	
	const obj = {
		"banner": i1,
		"recommend": i2
	}

	return obj;
}

export function getHomeGoodsInf(type, page) {
	return instance1({
		url: '/gethomegoodsinf',
		params: {
			type,
			page
		}
	})
}
