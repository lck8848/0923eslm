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