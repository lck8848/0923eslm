import request from './request.js';
// 用户登录
export async function userLogin(data){
	return await request("/login",{data,method:'POST'});
}
