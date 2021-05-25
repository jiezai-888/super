import {
	instance1
} from "./request.js"
import qs from 'qs'
import axios from 'axios';

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

export function getgooddetailsinf(id){
	return instance1({
		url:'/getgooddetails',
		params:{
			id
		}
	})
}

export function login(username,userpsd) {
	const data={
		'username':username,
		'userpsd':userpsd,
	}
	return instance1({
		url: '/user/login',
		method:'post',
		headers: {
		    'Content-type': 'application/x-www-form-urlencoded'
		  },
		// headers:{
		// 	'Content-Type':'application/x-www-form-urlencoded',
		// 	},
		// headers:{
		// 	'Content-Type': 'multipart/form-data;'
		// },
		data:qs.stringify(data)
		// params: {
		// 	'username':qs.stringify(),
		// 	userpsd
		// }
	})
}


// export function login(username,userpsd){
// 	const param={username,userpsd};
// 	axios.post('http://localhost:8081/user/login',qs.stringify({param})).then(res=>{
// 		console.log(res);
// 	})
// }