import request from './request.js';
// 获取用户的数据
export async function userList(){
	return await request("/userList",{});
}