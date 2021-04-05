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