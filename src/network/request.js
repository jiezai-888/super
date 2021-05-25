import axios from 'axios';

export function instance1(config) {
	const instance = axios.create({
		baseURL: 'http://localhost:8081',
		timeout: 6000,
	})

	// 对请求进行拦截
	instance.interceptors.request.use(config => {
			return config
		},
		err => {
			return err
		})

	// 对响应进行拦截
	instance.interceptors.response.use(res => {
		return res.data;
	}, err => {
		return err
	})

	//返回该axios实例
	return instance(config)
}

export function instance2(config) {
	const instance = axios.create({
		// baseURL: 'http://localhost:8081',
		baseURL:'/api',
		timeout: 6000,
	})

	// 对请求进行拦截
	instance.interceptors.request.use(config => {
			return config;
		},
		err => {
			return err;
		})

	// 对响应进行拦截
	instance.interceptors.response.use(res => {
		return res.data;
	}, err => {
		return err
	})

	//返回该axios实例
	return instance(config)
}
