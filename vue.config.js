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
	devServer:{
		port:"8080",
		open:true,
		proxy:{
			"/api":{
				target:"http://localhost:8081",
				changeOrigin:true,
				pathRewrite:{
					'/api':''
				}
			}
		}
	}
}