<template>
	<view class="container">
		<view class="app-dp">
			<view class="index"><view class="img"></view></view>
			<image :src="m_item.m_img" mode="" class="header-img"></image>
			<view class="info">
				<view class="title"><text class="tt">{{m_item.m_name}}</text></view>
				<view class="count">
					<text class="p">评价{{m_item.grade}}</text>
					<text class="y">月售{{m_item.sales_number}}单</text>
					<text class="f">蜂鸟快送约{{m_item.time}}分钟</text>
				</view>
				<view class="discounts">
					<view class="item color-y">
						<p class="index-dis">
							<text class="price">¥{{m_item.distance}}</text>
							<text class="condition">
								<image src="/static/images/shop/king.png"></image>
								无门槛
							</text>
						</p>
						<p class="index-get">领取</p>
					</view>
					<view class="item color-p">
						<p class="index-dis">
							<text class="price">¥2</text>
							<text class="condition">满32可用</text>
						</p>
						<p class="index-get">领取</p>
					</view>
				</view>
				<view class="activity-tags">
					<view class="left">
						<view class="item">42减12</view>
						<view class="item">68减15</view>
						<view class="item">配送要优惠</view>
					</view>
					<view class="right">8个优惠</view>
				</view>
				<p class="tmryy">{{m_item.signboard}}</p>
			</view>
			<view class="foods">
				<van-tabs :active="active" @click="changeActive" color="#2395ff">
					<van-tab title="点餐"></van-tab>
					<van-tab title="评价"></van-tab>
					<van-tab title="商家"></van-tab>
				</van-tabs>
			</view>
			<view v-if="active == 0" class="data0">
				<image src="/static/images/shop/bybt.png" class="bybt"></image>
				<view class="recommend">
					<p class="rec-p">店长推荐</p>
					<view class="rec-a">
						<view class="rec-v">
							<view class="item" v-for="item in goodFoods" :key="item.id">
								<image :src="item.fImg"></image>
								<view class="info">
									<p class="title">{{item.title}}</p>
									<p class="desc">月售{{item.sell}} 好评率{{item.good}}%</p>
									<view class="buy">
										<p class="price">¥{{item.sell_price}}</p>
										<image src="/static/images/shop/add.png" mode=""></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="foodsInfo">
					<van-sidebar :active-key="activeKey" class="foods_sidebar">
						<view class="foods_sidebar_item" v-for="item in foodsData" :key="item.id">
							<image :src="item.img" v-if="item.img" style="width: 26rpx;height: 26rpx;position: absolute;transform: translate(12rpx,48rpx);"></image>
							<van-sidebar-item :title="(item.img ? '　' : '') + item.classify" />
						</view>

						<view class="menuview-menuList">
							<view class="scroller">
								<dl class="item" v-for="(item,index) in foodsData" :key="item.id">
									<dt class="role">
										<view class="category-title">
											<strong class="category-name">{{item.classify}}</strong>
											<text class="category-desc">{{item.desc}}</text>
										</view>
									</dt>
									<dd class="f_data" v-for="(f,i) in item.food" :key="f.id">
										<view class="fooddetails-root">
											<text class="fooddetails-logo"><image :src="f.fImg"></image></text>
											<view class="fooddetails-info">
												<p class="fooddetails-name"><text class="fooddetails-nameText">{{fj.title}}</text></p>
												<p class="fooddetails-desc">{{f.desc}}</p>
												<p class="fooddetails-sales">
													<text>月售{{f.sell}}份</text>
													<text>好评率{{f.sell_price}}%</text>
												</p>
												<view class="fooddetails-activityRow">
													<text class="foodcommon-activity">
														<text class="mini-tag" v-if="f.discount.length > 0"><text class="foodcommon-rateGhost">{{f.discount}}折</text></text>
														<text class="mini-tag" v-if="f.count.length > 0"><text class="foodcommon-rateGhost">每单限{{f.count}}份优惠</text></text>
													</text>
												</view>
												<text class="salesInfo-price">
													<text>¥{{f.sell_price}}</text>
													<del v-if="f.raw_price">¥{{f.raw_price}}</del>
												</text>
												<view class="fooddetails-button">
													<text>
														<text class="cartbutton-minPurchase"></text>
														<text class="cartbutton-entitybutton">
															<a href="javascript;"><image src="/static/images/shop/add.png"></image></a>
														</text>
													</text>
												</view>
											</view>
										</view>
									</dd>
								</dl>
							</view>
						</view>
					</van-sidebar>
				</view>
			</view>
			<view v-if="active == 1" class="data1">评价</view>
			<view v-if="active == 2" class="data2">商家</view>
			{{ foodsData[0] }}
		</view>
	</view>
</template>

<script>
	import { classifyList,foodList,hotFoodList } from '@/api/shopApi.js';
export default {
	data() {
		return {
			m_item: {},
			active: 0,
			icon: 'none',
			activeKey: 0,
			foodsData: [],
			goodFoods:[]
		};
	},
	methods: {
		// 获取指定商家的所有分类
		async getClassifyList(){
			let res = await classifyList(this.m_item.m_id);
			// 
			this.foodsData = res.classifyList;
			// 保存所有的Promise对象
			let proArr = [];
			this.foodsData.map( item =>{
				proArr.push(foodList(item.c_id));
			})
			// 并发执行
			let result = await Promise.all(proArr);
			result.forEach((x,key)=>{
				this.foodsData[key].food = x.classifyList;
			})
			console.log("123",this.foodsData);
		},
		
		// 获取店长推荐的商品
		async getHotFoodList(){
			let res = await hotFoodList(this.m_item.m_id);
			this.goodFoods = res.hotFoodList;
			console.log(res.hotFoodList);
		},
		changeActive(event) {
			console.log(event.detail.index);
			this.active = event.detail.index;
		}
	},
	async created(){
		// 获取当前商家的所有分类
		this.getClassifyList();
		this.getHotFoodList();

		console.log("123456",this.m_item)
	},
	mounted(){
		let temp_img = document.querySelector(".container .app-dp .index .img");
		console.log("temp_img",temp_img)
		temp_img.style.backgroundImage =  `url(${this.m_item.adv_img})`;
	},
	onLoad(e){
		// 获取点击商家的信息
		this.m_item = JSON.parse(e.item);
	},
};
</script>

<style lang="scss" scoped>
.container {
	.app-dp {
		position: relative;
		.index {
			.img {
				width: 100vw;
				height: 200rpx;
				background-image: url(/static/images/shop/top.png);
				background-repeat: no-repeat;
				background-size: cover;
				background-position: 50%;
				// transform: translateY(-200rpx);
			}
		}
		.header-img {
			position: absolute;
			width: 150rpx;
			height: 150rpx;
			top: 100rpx;
			left: 50%;
			border-radius: 8rpx;
			transform: translateX(-50%);
		}
		.info {
			position: relative;
			margin-top: 60rpx;
			.title {
				position: relative;
				font-size: 41rpx;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				letter-spacing: -4rpx;
				text-align: center;
				.tt{
					
					margin: 0 auto;
				}
				.tt:after {
					content: '';
					border-style: solid;
					border-width: 1.466667vw 0 1.466667vw 1.733333vw;
					border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
					transform: translateX(10rpx);
					position: absolute;
					bottom: 14rpx;
				}
			}
			.count {
				display: flex;
				width: 460rpx;
				font-size: 22rpx;
				color: #666;
				margin: 0 auto;
				justify-content: space-between;
				margin-top: 10rpx;
			}
			.discounts {
				display: flex;
				justify-content: center;
				margin-top: 16rpx;

				.item {
					display: flex;
					position: relative;
					width: 288rpx;
					height: 48rpx;
					box-sizing: border-box;
					margin-left: 24rpx;
					padding-left: 15rpx;
					padding-top: 4rpx;
					p {
						float: left;
					}
					.index-dis {
						display: flex;
						flex: 1;
						justify-content: center;
						align-items: center;
						width: 203rpx;
						height: 38rpx;
						font-size: 24rpx;
						.price {
							font-weight: 500;
							padding-left: 10rpx;
							padding-right: 20rpx;
						}
						.condition {
							font-size: 22rpx;
							padding-top: 2rpx;
							image {
								width: 30rpx;
								height: 25rpx;
							}
						}
					}

					.index-dis:after {
						content: '';
						position: absolute;
						bottom: 0px;
						border-bottom: none;
						border-radius: 1.333333vw 1.333333vw 0 0;
						right: 9.333333vw;
						width: 1.333333vw;
						height: 0.666667vw;
						background: #fff;
						transform: translateX(50%);
					}
					.index-get {
						text-align: center;
						width: 70rpx;
						height: 26rpx;
						line-height: 40rpx;
						font-size: 22rpx;
					}
					.index-get:before {
						content: '';
						position: absolute;
						top: -1px;
						border-top: none;
						border-radius: 0 0 1.333333vw 1.333333vw;
						right: 9.333333vw;
						width: 1.333333vw;
						height: 0.666667vw;
						background: #fff;
						transform: translateX(50%);
					}
				}
				.item:first-child {
					margin-left: 0rpx;
				}

				.color-y {
					color: #594519;
					background: #ffe578;
				}

				.color-p {
					background: #fff4f4;
					color: #5c1603;
				}
			}
			.activity-tags {
				display: flex;
				position: relative;
				margin: 3.2vw auto 0;
				width: 80vw;
				justify-content: space-between;
				.left {
					.item {
						float: left;
						font-size: 20rpx;
						margin: 0.666667vw;
						padding: 0.266667vw 1.066667vw;
						color: rgb(255, 75, 51);
						border: 1px solid rgb(255, 201, 193);
						background-color: #fff;
					}
				}
				.right {
					margin: 0.666667vw;
					padding: 0.266667vw 1.066667vw;
					font-size: 20rpx;
					padding-right: 2.933333vw;
					text-align: right;
					color: #999;
					width: 16.266667vw;
				}

				.right::after {
					content: '';
					display: block;
					border-style: solid;
					border-width: 1.066667vw 0.933333vw 0;
					border-color: #999 transparent transparent;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 0;
				}
			}
			.tmryy {
				font-size: 20rpx;
				margin: 2.266667vw auto 2.666667vw;
				padding: 0;
				white-space: nowrap;
				width: 80vw;
				color: #999;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		.data0 {
			padding: 1.866667vw 0 0;
			background: #fff;
			.bybt {
				border-radius: 0.8vw;
				display: block;
				margin: 0 auto;
				height: 23.466667vw;
				width: 91.466667vw;
				max-width: 100%;
			}
			.recommend {
				padding-top: 4.266667vw;
				background-color: #fff;
				.rec-p {
					margin: 0;
					margin-bottom: 2.666667vw;
					padding-left: 4.266667vw;
					color: #333;
					font-size: 32rpx;
					font-weight: 700;
				}
				.rec-a {
					display: flex;
					overflow-x: scroll;
					.rec-v {
						display: flex;
						.item:first-child {
							margin-left: 4.266667vw;
						}
						.item {
							width: 32vw;
							height: 32vh;
							margin-right: 2.666667vw;
							flex: none;
							image {
								display: block;
								width: 32vw;
								height: 30vw;
							}
							.info {
								transform: translateY(-50rpx);
								.title {
									width: 32vw;
									font-size: 28rpx;
									color: #333;
									margin: 1.866667vw 0 0.933333vw;
									white-space: nowrap;
									text-overflow: ellipsis;
									overflow: hidden;
									font-weight: 400;
									letter-spacing: 0;
								}
								.desc {
									margin: 0;
									font-weight: 400;
									font-size: 20rpx;
									color: #999;
									margin-bottom: 1.866667vw;
								}
								.buy {
									display: flex;
									align-items: center;
									justify-content: space-between;
									padding-right: 0.266667vw;
									.price {
										font-size: 36rpx;
										color: rgb(255, 83, 57);
									}
									image {
										width: 44rpx;
										height: 44rpx;
									}
								}
							}
						}
					}
				}
			}
			.foodsInfo {
				.foods_sidebar {
					position: relative;
					.menuview-menuList {
						position: absolute;
						width: 576rpx;
						height: 100vw;
						top: 0rpx;
						left: 170rpx;
						.scroller {
							height: 100%;
							padding-bottom: 10.666667vw;
							overflow-y: auto;
							.item {
								margin: 0;
								padding: 0;
								.role {
									position: relative;
									margin-left: 2.666667vw;
									padding: 2vw 8vw 2vw 0;
									.category-title {
										display: flex;
										align-items: center;
										overflow: hidden;
										.category-name {
											margin-right: 1.333333vw;
											font-weight: 700;
											font-size: 24rpx;
											color: #666;
											flex: none;
										}
										.category-desc {
											flex: 1;
											color: #999;
											font-size: 20rpx;
											white-space: nowrap;
											overflow: hidden;
											text-overflow: ellipsis;
										}
									}
								}
								.f_data {
									position: relative;
									padding: 0;
									margin: 0;
									min-height: 30.666667vw;
									padding-left: 2.666667vw;
									.fooddetails-root {
										display: flex;
										position: relative;
										min-height: 27.466667vw;

										padding: 2.666667vw 0;
										margin-bottom: 0.133333vw;
										.fooddetails-logo {
											width: 25.333333vw;
											height: 25.333333vw;
											flex: none;
											margin-right: 2.666667vw;
											position: relative;
											image {
												max-width: 100%;
												width: 100%;
												height: 190rpx;
												border-radius: 0.533333vw;
											}
										}
										.fooddetails-info {
											flex: 1;
											position: relative;
											padding-bottom: 6.666667vw;
											padding-right: 4vw;
											.fooddetails-name {
												margin: 0;
												font-weight: 400;
												position: relative;
												padding-right: 4vw;
												display: flex;
												align-items: start;
												.fooddetails-nameText {
													font-weight: 700;
													overflow: hidden;
													font-size: 30rpx;
													white-space: nowrap;
													width: 40vw;
													text-overflow: ellipsis;
												}
											}
											.fooddetails-desc {
												margin: 1vw 0;
												width: 42.666667vw;
												font-weight: 400;
												color: #999;
												overflow: hidden;
												text-overflow: ellipsis;
												white-space: nowrap;
												font-size: 20rpx;
											}
											.fooddetails-sales {
												font-size: 20rpx;
												margin: 1vw 0 !important;
												color: #999;
												line-height: 1;
												min-height: 1em;
												font-weight: 400;
											}
											.fooddetails-activityRow {
												display: flex;
												.foodcommon-activity {
													display: flex;
													.mini-tag {
														position: relative;
														font-size: 40rpx;
														color: transparent;
														white-space: nowrap;
														height: 4vw;
														padding: 0 0.8vw;
														.foodcommon-rateGhost {
															position: absolute;
															left: -20rpx;
															top: -10rpx;
															transform: scale(0.5);
															// transform-origin: 0 0;
															// display: flex;
															// align-items: center;
															// justify-content: center;
															font-size: 40rpx;
															border-radius: 0.266667vw;
															border: 0.266667vw solid hsla(8, 79%, 62%, 0.3);
															color: #eb6551;
														}
													}
												}
											}
											.salesInfo-price {
												position: absolute;
												bottom: 14rpx;
												color: rgb(255, 83, 57);
												font-size: 0.4rem;
												line-height: 4.266667vw;
												padding-bottom: 0.933333vw;
												display: flex;
												align-items: baseline;
												text {
													margin-right: 0.266667vw;
													font-size: 30rpx;
													line-height: 4.266667vw;
												}
												del {
													font-size: 24rpx;
													color: #999;
													margin-left: 1.6vw;
													line-height: 4.266667vw;
												}
											}
											.fooddetails-button {
												position: absolute;
												right: 4vw;
												bottom: 10rpx;
												.cartbutton-minPurchase {
													font-size: 20rpx;
													color: #666;
												}
												.cartbutton-entitybutton {
													display: inline-flex;
													align-items: center;
													image {
														width: 44rpx;
														height: 44rpx;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
