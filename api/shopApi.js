import request from './request.js';
// 获取指定商家的所有分类
export async function classifyList(id){
	return await request("/classifyList?id="+id,{});
}
// 获取指定分类的所有商品
export async function foodList(id){
	return await request("/foodList?id="+id,{});
}

// 热门推荐
export async function hotFoodList(id){
	return await request("/hotFoodList?id="+id,{});
}

// 获取当前登录指定商家的所有购物车
export async function carList(params){
	return await request(`/carList?u_id=${params.u_id}&m_id=${params.m_id}`,{});
}
// 购物车的商品加1
export async function addCount(params){
	return await request(`/addCount?s_id=${params.s_id}&u_id=${params.u_id}&bool=${params.bool}&price=${params.price}`,{});
}
// 购物车的商品减1
export async function subCount(params){
	return await request(`/subCount?s_id=${params.s_id}&u_id=${params.u_id}&m_id=${params.m_id}`,{});
}
//获取当前商家的所有商品的总金额
export async function totalNum(params){
	return await request(`/totalNum?u_id=${params.u_id}&m_id=${params.m_id}`,{});
}
//判断当前商品是否已加入购物车
export async function isBool(params){
	return await request(`/isBool?u_id=${params.u_id}&m_id=${params.m_id}&s_id=${params.s_id}`,{});
}