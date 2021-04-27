import {
	instance1
} from "./request.js"
export function getgoodsinf(title){
	return instance1({
		url:'/getgooddetailsinf',
		params:{
			title
		}
	})
}

export function getgooddetails(id){
	return instance1({
		url:'/getgooddetails',
		params:{
			id
		}
	})
}
//要求prdname这个参数要与后台的传进去的值一样
export function getgooddetailsimg(prdname){
	return instance1({
		url:'/getgooddetailsimg',
		params:{
			prdname
		}
	})
}