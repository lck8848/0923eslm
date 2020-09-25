// 封装一个发送请求
export default function request(url,options){
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: "http://112.74.101.92:4000" + url, //仅为示例，并非真实接口地址。
		    data: options.data == undefined ? {}:options.data,
			method: options.method == undefined ? 'GET':options.method,
		    success: (res) => {
		        console.log(res);
		        resolve(res);
		    },
			fail: (err) => {
		        console.log(err);
		        reject(err);
		    },
		});
	})
}