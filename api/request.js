// 封装一个发送请求
export default function request(url,options){
	console.log(url)
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: "http://112.74.101.92:4000" + url, //仅为示例，并非真实接口地址。
		    data: options.data == undefined ? {}:options.data,
			method: options.method == undefined ? 'GET':options.method,
		    success: (res) => {
		        resolve(res.data);
		    },
			fail: (err) => {
		        reject(err);
		    },
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			} 
			
		});
	})
}