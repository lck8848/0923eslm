<template>
	<view class="container">
		<!--pages/home/home.wxml-->
		<view class="home-container">
			<!-- 搜索 -->
			<van-search value="" background="#008EFF" placeholder="搜索饿了么商家 , 商品名称" />
			<!-- 宫格 -->
			<van-grid column-num="5" :border="false">
				<van-grid-item use-slot v-for="item in foods" :key="item.mark">
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
			<view class="tab">
				<van-tabs :active="active" @click="changeActive">
					<van-tab title="综合排序"></van-tab>
					<van-tab title="距离最近"></van-tab>
					<van-tab title="销量最高"></van-tab>
					<van-tab title="筛选"></van-tab>
				</van-tabs>
				<image class="screenImg" src="/static/icon/screen.png" mode=""></image>
			</view>
			
			
		</view>

	</view>
</template>

<script>
	// import { userList } from '../../api/homeApi.js';
	export default {
		data() {
			return {
				foods: [{
						mark: "美食",
						img_path: "/static/images/home/menu1.webp"
					},
					{
						mark: "夜宵",
						img_path: "/static/images/home/menu2.webp"
					},
					{
						mark: "跑腿代购",
						img_path: "/static/images/home/menu3.webp"
					},
					{
						mark: "汉堡披萨",
						img_path: "/static/images/home/menu4.webp"
					},
					{
						mark: "甜品饮品",
						img_path: "/static/images/home/menu5.webp"
					},
					{
						mark: "速食简餐",
						img_path: "/static/images/home/menu6.webp"
					},
					{
						mark: "地方小吃",
						img_path: "/static/images/home/menu7.webp"
					},
					{
						mark: "米粉面馆",
						img_path: "/static/images/home/menu8.webp"
					},
					{
						mark: "包子粥店",
						img_path: "/static/images/home/menu9.webp"
					},
					{
						mark: "炸鸡炸串",
						img_path: "/static/images/home/menu10.webp"
					},
				],
				active: 1,
			}
		},
		methods: {
			changeActive(event){
				this.active = event.detail.index;
				// console.log(this.active);
			}
		},
		components: {},
		// async created(){
		// 	console.log(11)
		// 	let res = await userList();
			
		// 	console.log(res);
		// }
	}
</script>

<style lang="scss" scoped>
	.home-container .tab {
		position: relative;
		.screenImg {
			position: absolute;
			top: 18px;
			right: 20px;
			width: 12px;
			height: 12px;
			z-index: 5;
		}
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
