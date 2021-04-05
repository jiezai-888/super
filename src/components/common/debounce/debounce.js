// 防抖动,避免一些高频次的调用
export function defend(func, delay) {
	let timer = null;
	return function(...args) {
		if (timer) {
			clearTimeout(timer);
		}
		//注意setTimeout()即使没有设置延迟时间也会被放到下一次执行
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}
}
