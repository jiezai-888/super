import {instance1} from "./request.js"

export function getHomeMultidata(){
	return instance1({
		url:'/readImage'
	})
}