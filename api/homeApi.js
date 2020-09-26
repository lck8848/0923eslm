import request from './request.js';
// 获取用户的数据
export async function userList(){
	return await request("/userList",{});
}
// 获取商家的数据
export async function merchantList(data){
	return await request("/merchantList",{data});
}