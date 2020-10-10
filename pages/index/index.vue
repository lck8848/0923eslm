<template>
	<view class="container">
		<!--pages/home/home.wxml-->
		<view class="home-container">
			<!-- 搜索 -->
			
			<navigator url="/pages/search/search" hover-class="none">
				<van-search value="" class="search" background="#008EFF" placeholder="搜索饿了么商家 , 商品名称" />
			</navigator>
			<view class="empty">
				
			</view>
			<!-- 宫格 -->
			<van-grid class="vanGridTop" column-num="5" :border="false">
				<van-grid-item use-slot v-for="item in foods" :key="item.mark" @click="getClassIfyPage(item.f_id)">
					<image style="width: 100%; height: 88rpx;" :src="item.img_path" />
					<view class="text">{{ item.mark }}</view>
				</van-grid-item>
			</van-grid>

			<!-- 品质套餐 -->
			<view class="quality">
				<view class="top">
					<view class="left">
						<view class="title">品质套餐</view>
						<view class="content">搭配齐全吃得好</view>
						<view class="buy">立即抢购 ></view>
					</view>
					<view class="right">
						<image class="img" src="/static/images/home/food.webp"></image>
					</view>
				</view>
				<view class="footer">
					<van-cell value="限时6元开通" is-link value-class="red">
						<view slot="title">
							<view class="van-cell-text">
								<van-icon name="/static/images/home/crown.png"></van-icon>
								<text class="left">超级会员</text> · <text class="center">每月领20元红包</text>
							</view>
						</view>
					</van-cell>
				</view>
			</view>

			<!-- 分割线 -->
			<van-divider contentPosition="center" customStyle="color: #000; border-color: #eee; font-size: 32rpx;">
				为你推荐
			</van-divider>

			<!-- tab -->
			<view class="tab" id="menu">
				<van-tabs :active="active" @click="changeActive">
					<van-tab title="综合排序"></van-tab>
					<van-tab title="距离最近"></van-tab>
					<van-tab title="销量最高"></van-tab>
					<van-tab title="筛选"></van-tab>
				</van-tabs>
				<image class="screenImg" src="/static/icon/screen.png" mode=""></image>
			</view>
			
			<view class="merchant-container">
				<view class="item" v-for="item in merchantList" :key="item.m_id" @click="getShopPage(item)">
					<view class="left">
						<image class="food_img" :src="item.m_img" mode=""></image>
					</view>
					<view class="right">
						<view class="title">{{ item.m_name }}</view>
						<view class="sales">
							<uni-rate size="13" class="rateAbsu" allow-half :value="item.grade" />{{ item.grade }} 月售{{ item.sales_number }}单
						</view>
						<view class="footer">
							<view class="distribution">
								￥{{ item.start_money }}起送 | {{ getDistribution(item.distribution) }}
							</view>
							<view class="distance">
								{{ getDistance(item.distance) }} | {{ item.time }}分钟
							</view>
						</view>
						<view class="specialty">
							{{item.signboard}}
						</view>
					</view>
					
				</view>
			</view>
			</view>
			<view class="filex" v-if="isMenuFix" @click="getTop">
				<image class="filexImg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" mode=""></image>
			</view>

	</view>
</template>

<script>
	import { merchantList } from '@/api/homeApi.js';
	export default {
		data() {
			return {
				foods: [{
						f_id: "1",
						mark: "美食",
						img_path: "/static/images/home/menu1.webp"
					},
					{
						f_id: "2",
						mark: "夜宵",
						img_path: "/static/images/home/menu2.webp"
					},
					{
						f_id: "3",
						mark: "跑腿代购",
						img_path: "/static/images/home/menu3.webp"
					},
					{
						f_id: "4",
						mark: "汉堡披萨",
						img_path: "/static/images/home/menu4.webp"
					},
					{
						f_id: "5",
						mark: "甜品饮品",
						img_path: "/static/images/home/menu5.webp"
					},
					{
						f_id: "6",
						mark: "速食简餐",
						img_path: "/static/images/home/menu6.webp"
					},
					{
						f_id: "7",
						mark: "地方小吃",
						img_path: "/static/images/home/menu7.webp"
					},
					{
						f_id: "8",
						mark: "米粉面馆",
						img_path: "/static/images/home/menu8.webp"
					},
					{
						f_id: "9",
						mark: "包子粥店",
						img_path: "/static/images/home/menu9.webp"
					},
					{
						f_id: "10",
						mark: "炸鸡炸串",
						img_path: "/static/images/home/menu10.webp"
					},
				],
				active: 0,
				 merchantList:[],
				 isMenuFix: false,
				 menuTop:0,
				
			}
		},
		methods: {
			// 点击跳转详情页
			getShopPage(item){
				let itemStr = JSON.stringify(item);
				uni.navigateTo({
				    url: `/pages/shop/shop?item=${itemStr}`
				});
			},
			getTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 200
				});
			},
			// 根据分类id进行跳转
			getClassIfyPage(id){
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
				    url: `/pages/classify/classify?classify=${id}`
				});
			},
			// 根据距离显示
			getDistance(distance){
				return distance > 1 ? distance + "km" : distance * 1000 + "m";
			},
			// 根据配送费显示
			getDistribution(distribution){
				return distribution <= 0 ? "免配送费" : "配送￥" + distribution;
			},
			// 根据指定字段给数组进行排序
			sortMerList(filed,bool){
				this.merchantList.sort((x,y)=>{
					// 升序
					let a = parseFloat(x[filed]);
					let b = parseFloat(y[filed]);
					if(bool){
						if(a > b){
							return 1;
						}else {
							return -1;
						}
					}else {
						// 降序
						if(a < b){
							return 1;
						}else {
							return -1;
						}
					}
					
				})
			},
			changeActive(event){
				this.active = event.detail.index;
				switch(this.active){
					case 0:
						//距离最近排序 
						this.sortMerList("m_id",false);
						break;
					case 1:
						//距离最近排序 
						this.sortMerList("distance",true);
						break;
					case 2:
						// 销量最高排序
						this.sortMerList("sales_number",false);
						console.log(this.merchantList);
						break;
					default:
						break;
				}
			},
			// 获取商家所有商家
			async getMerchantList(){
				let res = await merchantList({});
				this.merchantList = res.merchantList;
				// 默认第一个加载对新商家最近排序
				this.sortMerList("m_id",false);
			}
		},
		onPageScroll(e){
			// 滚到到一定高度显示
			let currentHeigth = e.scrollTop;
			console.log(currentHeigth)
			let scrollHeigth = 200;
			if(currentHeigth > scrollHeigth){
				this.isMenuFix = true;
			}else {
				this.isMenuFix = false;
			}
			
		},
		onReady(){
			// const query = uni.createSelectorQuery();
			// query.select('#menu').boundingClientRect(data => {
			// 	// 初始记录距离顶部的距离=
			// 	this.menuTop =  data.top
			// }).exec();
		},
		components: {
		},
		created(){
			// 初始化加载，获取商家信息
			this.getMerchantList();
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		position: fixed;
		width: 100%;
		z-index: 20;
	}
	.filex {
		display: flex;
		position: fixed;
		bottom: 160rpx;
		right: 30rpx;
		align-items: center;
		justify-content: center;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		border: 1px solid #ccc;
		background-color: #fff;
		z-index: 10;
		.filexImg {
			width: 55rpx;
			height: 55rpx;
		}
	}
	
	.home-container .merchant-container .item {
		display: flex;
		padding: 10rpx 20rpx 10rpx;
		.left {
			width: 180rpx;
			height: 180rpx;
			margin-right: 20rpx;
			.food_img {
				width: 100%;
				height: 100%;
			}
		}
		.sales {
			display: flex;
			margin: 10rpx 0;
			margin-left: 140rpx;
			.rateAbsu {
				position: absolute;
				top: 37%;
				left: 0;
			}
		}
		.right {
			flex: 1;
			font-size: 24rpx;
			color: #666;
			position: relative;
			.title {
				font-size: 32rpx;
				font-weight: 900;
				color: #000;
			}
			.footer {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
				.distribution {
				}
				.distance {
					color: #999;
				}
			}
		}
	}
	
	.home-container .tab {
		position: relative;
		.screenImg {
			position: absolute;
			top: 34rpx;
			right: 5%;
			width: 24rpx;
			height: 24rpx;
			z-index: 5;
		}
	}
	.empty {
		height: 100rpx;
	}
	.home-container .van-grid .text {
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #666;
	}

	.quality .top {
		display: flex;
		justify-content: space-between;
		background-color: #f6f6f6;
		padding: 15rpx 30rpx;
		margin-bottom: 10rpx;
	}

	.quality {
		margin-top: 20rpx;
		padding: 0 20rpx;
	}

	.quality .top .right {
		width: 300rpx;
		height: 200rpx;
	}

	// .home-container .van-grid .van-grid-item .content-class {
	//     padding: 30rpx 16rpx 0rpx;
	// }
	.van-grid-item__content--center {
		padding: 0;
	}

	// content-class   
	.quality .top .left .title {
		font-weight: 900;
	}

	.quality .top .left .content {
		font-size: 32rpx;
		margin-bottom: 15rpx;
		color: #9a9a9a;
	}

	.quality .top .left .buy {
		color: #b68f71;
		font-size: 32rpx;
		font-weight: 700;
	}


	.quality .top .right .img {
		width: 100%;
		height: 100%;
	}

	.footer .van-cell {
		background-color: #f7e3ac;
		padding: 20rpx 15rpx;
	}

	.quality .footer .red {
		color: #7b6631;
		font-size: 25rpx;
	}

	.quality .footer .van-cell .van-cell-text .left {
		margin-left: 5rpx;
		font-weight: 900;
		color: #7b6631;
		font-size: 30rpx;
	}

	.quality .footer .van-cell .van-cell-text .center {
		color: #7b6631;
		font-size: 20rpx;
	}

	.classify {
		display: flex;
		justify-content: space-around;
	}

	.classify .item {
		font-size: 32rpx;
	}

	.classify .selected {
		font-weight: 900;
	}
</style>
