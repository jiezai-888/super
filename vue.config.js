module.exports={
	configureWebpack:{
		resolve:{
			extensions:[],
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
			}
		}
	},
	// devServer:{
	// 	port:"8080",
	// 	open:true,
	// 	proxy:{
	// 		"/bbb":{
	// 			target:"http://localhost:8081/bbb/",
	// 			changeOrigin:true,
	// 			pathRewrite:{
	// 				"^/bbb":""
	// 			}
	// 		}
	// 	}
	// }
}