<template>
	<view class="container">
		<view class="app-dp" @click="wuhu">
			<view class="index"><view class="img"></view></view>
			<image :src="m_item.m_img" mode="" class="header-img"></image>
			<view class="info">
				<view class="title">
					<text class="tt">{{ m_item.m_name }}</text>
				</view>
				<view class="count">
					<text class="p">评价{{ m_item.grade }}</text>
					<text class="y">月售{{ m_item.sales_number }}单</text>
					<text class="f">蜂鸟快送约{{ m_item.time }}分钟</text>
				</view>
				<view class="discounts">
					<view class="item color-y">
						<p class="index-dis">
							<text class="price">¥10</text>
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
				<p class="tmryy">公告：{{ m_item.notice }}</p>
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
									<p class="title">{{ item.title }}</p>
									<p class="desc">月售{{ item.sell }} 好评率{{ item.good }}%</p>
									<view class="buy">
										<p class="price">¥{{ item.sell_price }}</p>
										<text v-if="selectFood.includes(item.id)" @click="sub(item)"><image src="/static/images/shop/subtract.png"></image></text>
										<text v-if="selectFood.includes(item.id)" class="num">1</text>
										<image @click="add(item)" src="/static/images/shop/add.png" mode=""></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="foodsInfo">
					<scroll-view scroll-y class="left-aside foods_sidebar">
						<view v-for="item in foodsData" :key="item.c_id" class="f-item b-b foods_sidebar_item" :class="{ active: item.c_id === currentId }" @click="tabtap(item)">
							<image :src="item.img" v-if="item.img" style="width: 26rpx;height: 26rpx;position: absolute;transform: translate(12rpx,48rpx);"></image>
							<view>{{ (item.img ? '　' : '') + item.classify }}</view>
						</view>
					</scroll-view>

					<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
						<view class="menuview-menuList">
							<view class="scroller">
								<dl class="item s-list" v-for="(item, index) in foodsData" :key="item.c_id" v-if="isFoods" :id="'main-' + item.c_id">
									<dt class="role">
										<view class="category-title">
											<strong class="category-name">{{ item.classify }}</strong>
											<text class="category-desc">{{ item.desc }}</text>
										</view>
									</dt>
									<!-- <dd @click="navToList(item.id, titem.id)"  class="f_data" v-for="(f, i) in item.food" :key="f.id" v-if="f.pid === item.id"> -->
									<dd class="f_data" v-for="(f, i) in item.food" :key="f.id" v-if="f.p_id === item.c_id">
										<view class="fooddetails-root">
											<text class="fooddetails-logo"><image :src="f.fImg"></image></text>
											<view class="fooddetails-info">
												<p class="fooddetails-name">
													<text class="fooddetails-nameText">{{ f.title }}</text>
												</p>
												<p class="fooddetails-desc">{{ f.desc }}</p>
												<p class="fooddetails-sales">
													<text style="margin-right: 10rpx;">月售{{ f.sell }}份</text>

													<text>好评率{{ f.sell_price }}%</text>
												</p>
												<view class="fooddetails-activityRow">
													<text class="foodcommon-activity">
														<text class="mini-tag" v-if="f.discount">
															<text class="foodcommon-rateGhost">{{ f.discount }}折</text>
														</text>
														<text class="mini-tag" v-if="f.count">
															<text class="foodcommon-rateGhost">每单限{{ f.count }}份优惠</text>
														</text>
													</text>
												</view>
												<text class="salesInfo-price">
													<text>¥{{ f.sell_price }}</text>
													<del v-if="f.raw_price">¥{{ f.raw_price }}</del>
												</text>
												<view class="fooddetails-button">
													<text>
														<text class="cartbutton-minPurchase"></text>
														<text class="cartbutton-entitybutton">
															<text v-if="selectFood.includes(f.id)" @click="sub(f)"><image src="/static/images/shop/subtract.png"></image></text>
															<text v-if="selectFood.includes(f.id)" class="num">1</text>
															<text @click="add(f)"><image src="/static/images/shop/add.png"></image></text>
														</text>
													</text>
												</view>
											</view>
										</view>
									</dd>
								</dl>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view v-if="active == 1" class="data1">评价</view>
			<view v-if="active == 2" class="data2">商家</view>
		</view>
		<view class="shopcart-bottom">
			<view class="mj"><text>满30减3元,满38减5元,满58元减8元</text></view>
			<view class="detail" v-if="detail">
				<view class="cartview-cartheader">
					<view class="cartview-headerText"><text>已选商品</text></view>
					<a href="javascript:" class="cartview-cartheaderRemove">
						<image src="/static/images/shop/delete.png" mode=""></image>
						<text>清空</text>
					</a>
				</view>
				<view class="entityList-cartbodyScroller">
					<ul class="entityList-cartlist">
						<li class="entityList-entityrow">
							<text class="entityList-entityname">
								<text class="entityList-name">西红柿炒鸡蛋（含米饭）</text>
								<p class="entityList-entityspecs"></p>
							</text>
							<text class="entityList-entitytotal"><text class="entityList-entitytotalDiscount">¥17</text></text>
							<text class="entityList-entitycartbutton">
								<text class="cartbutton-entitybutton">
									<text @click="sub(f)"><image src="/static/images/shop/subtract.png"></image></text>
									<text class="num">1</text>
									<text @click="add(f)"><image src="/static/images/shop/add.png"></image></text>
								</text>
							</text>
						</li>
					</ul>
					<view class="entityList-entityrow">
						<text class="entityList-entityname">餐盒</text>
						<text class="entityList-entitytotal">1</text>
						<text class="entityList-entitycartbutton"></text>
					</view>
				</view>
			</view>
			<view class="desc" @click="togger">
				<text v-if="cart" class="cart-img"></text>
				<text v-if="!cart" class="select-img"><text class="count-num">2</text></text>
				<view class="select-goods">
					<view v-if="select" class="no_select item">未选购商品</view>
					<view v-if="!select" class="select item">¥</view>
					<view class="send-money">另需配送费{{ m_item.distribution }}元</view>
				</view>
				<view class="end">
					<view v-if="start" class="start-money item">¥{{ m_item.start_money }}起送</view>
					<view v-if="!start" class="buy item">去结算</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { classifyList, foodList, hotFoodList } from '@/api/shopApi.js';
export default {
	data() {
		return {
			sizeCalcState: false,
			tabScrollTop: 0,
			currentId: 1,
			m_item: {},
			active: 0,
			icon: 'none',
			activeKey: 1,
			foodsData: [],
			goodFoods: [],
			isFoods: false,
			selectFood: [],
			cart: true,
			select: true,
			start: true,
			detail:false
		};
	},
	methods: {
		add(f) {
			!this.selectFood.includes(f.id) && this.selectFood.push(f.id);
			this.cart = false;
			this.select = false;
			this.start = false;
		},
		sub(f) {
			this.selectFood.includes(f.id) && this.selectFood.splice(this.selectFood.indexOf(f.id), 1);
			if (this.selectFood.length == 0) {
				this.cart = true;
				this.select = true;
				this.start = true;
			}
		},
		togger(){
			if(!this.detail && this.selectFood.length != 0){
				this.detail = true;
			}else{
				this.detail = false;
			}
		},
		wuhu(){
			if(this.detail) this.detail = false;
		},
		tabtap(item) {
			if (!this.sizeCalcState) {
				this.calcSize();
			}
			this.currentId = item.c_id;
			let index = this.foodsData.findIndex(sitem => sitem.c_id === item.c_id);
			this.tabScrollTop = this.foodsData[index].top;
		},
		//右侧栏滚动
		asideScroll(e) {
			if (!this.sizeCalcState) {
				this.calcSize();
			}
			let scrollTop = e.detail.scrollTop;
			let tabs = this.foodsData.filter(item => parseInt(item.top) <= scrollTop).reverse();
			if (tabs.length > 0) {
				this.currentId = tabs[0].c_id;
			}
		},
		//计算右侧栏每个tab的高度等信息
		calcSize() {
			let h = 0;
			this.foodsData.forEach(item => {
				let view = uni.createSelectorQuery().select('#main-' + item.c_id);
				view.fields(
					{
						size: true
					},
					data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}
				).exec();
			});
			this.sizeCalcState = true;
		},
		navToList(sid, tid) {
			uni.navigateTo({
				url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
			});
		},
		// 获取指定商家的所有分类
		async getClassifyList() {
			var i = 1;
			let res = await classifyList(this.m_item.m_id);
			//
			this.foodsData = res.classifyList;
			// 保存所有的Promise对象
			let proArr = [];
			this.foodsData.map(item => {
				item.p_id = i++;
				proArr.push(foodList(item.c_id));
			});
			// 并发执行
			let result = await Promise.all(proArr);
			result.forEach((x, key) => {
				this.foodsData[key].food = x.classifyList;
			});
			this.foodsData.map(item => {
				item.food.map(i => {
					i.p_id = item.c_id;
				});
			});

			this.isFoods = true;
		},

		// 获取店长推荐的商品
		async getHotFoodList() {
			let res = await hotFoodList(this.m_item.m_id);
			this.goodFoods = res.hotFoodList;
		},
		changeActive(event) {
			this.active = event.detail.index;
		}
	},
	async created() {
		// 获取当前商家的所有分类
		this.getClassifyList();
		this.getHotFoodList();
	},
	mounted() {
		let temp_img = document.querySelector('.container .app-dp .index .img');
		temp_img.style.backgroundImage = `url(${this.m_item.adv_img})`;
	},
	onLoad(e) {
		// 获取点击商家的信息
		this.m_item = JSON.parse(e.item);
	}
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
				.tt {
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
				// position: relative;
				display: flex;
				.left-aside {
					flex: 1;
					flex-shrink: 0;
					width: 80rpx;
					height: 100%;
					background-color: #f8f8f8;
					.f-item {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						height: 100upx;
						font-size: 28upx;
						color: #666666;
						position: relative;
						&.active {
							color: #333333;
							background: #ffffff;
						}
					}
				}
				.right-aside {
					flex: 1;
					height: 100vw;
					.menuview-menuList {
						// position: absolute;
						// width: 576rpx;
						// top: 0rpx;
						// left: 170rpx;
						// z-index: 1;
						.scroller {
							height: 100%;
							padding-bottom: 18vw;
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
													// display: inline-flex;
													// align-items: center;
													.num {
														display: inline-block;
														margin: 0 20rpx;
														font-size: 28rpx;
														transform: translateY(-10rpx);
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
						}
					}
				}
			}
		}
	}
	.shopcart-bottom {
		position: fixed;
		bottom: 0;
		.mj {
			width: 100vw;
			background-color: #fffad6;
			border-top: 0.133333vw solid #f9e8a3;
			opacity: 0.96;
			line-height: 5.333333vw;
			font-size: 20rpx;
			text-align: center;
		}
		.detail {
			.cartview-cartheader {
				display: flex;
				align-items: center;
				padding: 0 4vw;
				border-bottom: 0.133333vw solid #ddd;
				background-color: #eceff1;
				color: #666;
				height: 10.666667vw;
				.cartview-headerText {
					flex: 1;
					display: flex;
					align-items: center;
					color: #666;
				}
				.cartview-cartheaderRemove {
					flex: none;
					display: flex;
					align-items: center;
					padding-left: 4vw;
					color: #666;
					text-decoration: none;
					font-size: 26rpx;
					line-height: 4vw;
					image {
						width: 4vw;
						height: 4vw;
						fill: #ddd;
						margin-right: 0.8vw;
					}
				}
			}
			.entityList-cartbodyScroller {
				background-color: #ffffff;
				overflow: auto;
				max-height: 80vw;
				.entityList-cartlist {
					margin: 0;
					padding: 0;
					flex: none;
					.entityList-entityrow {
						display: flex;
						align-items: center;
						padding: 2vw 3.333333vw 2vw 0;
						min-height: 10vw;
						margin-left: 3.333333vw;
						.entityList-entityname {
							flex: 5.5;
							line-height: normal;
							.entityList-name {
								display: inline-block;
								font-style: normal;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								vertical-align: middle;
								max-width: 46.666667vw;
							}
							.entityList-entityspecs {
								width: 100%;
								line-height: 3.333333vw;
								color: #999;
								font-size: 32rpx;
							}
						}
						.entityList-entitytotal {
							color: rgb(255, 83, 57);
							flex: 2.5;
							text-align: right;
							white-space: nowrap;
							font-weight: 700;
							.entityList-entitytotalDiscount {
								text-align: right;
								white-space: nowrap;
								font-weight: 700;
								color: rgb(255, 83, 57);
							}
						}
						.entityList-entitycartbutton {
							flex: 3;
							text-align: right;
							.cartbutton-entitybutton {
								transform: translateY(4rpx);
								display: inline-flex;
								font-size: 28rpx;
								align-items: center;
								.num {
									display: inline-block;
									margin: 0 20rpx;
									font-size: 28rpx;
									transform: translateY(-10rpx);
								}
								image {
									width: 44rpx;
									height: 44rpx;
								}
							}
						}
					}
				}

				.entityList-entityrow {
					border-top: 0.133333vw solid #eee;
					display: flex;
					align-items: center;
					padding: 2vw 3.333333vw 2vw 0;
					min-height: 10vw;
					margin-left: 3.333333vw;
					font-size: 32rpx;
					.entityList-entityname {
						flex: 5.5;
						line-height: normal;
					}
					.entityList-entitytotal {
						flex: 2.5;
						text-align: right;
						white-space: nowrap;
						font-weight: 700;
						color: rgb(255, 83, 57);
					}
					.entityList-entitycartbutton {
						flex: 3;
						text-align: right;
					}
				}
			}
		}
		.desc {
			display: flex;
			align-items: center;
			padding-left: 21.066667vw;
			background-color: rgba(61, 61, 63, 0.9);
			height: 12.8vw;
			.cart-img {
				position: absolute;
				left: 3.2vw;
				background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
				bottom: 2vw;
				width: 13.333333vw;
				height: 13.333333vw;
				box-sizing: border-box;
				border-radius: 100%;
				background-color: #3190e8;
				border: 1.333333vw solid #444;
				box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
				will-change: transform;
			}
			.cart-img:before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: url('/static/images/shop/shopcart.svg') 50% no-repeat;
				background-size: 0.6rem;
				background-size: 6vw;
				content: '';
			}
			.select-img {
				position: absolute;
				left: 3.2vw;
				bottom: 2vw;
				width: 13.333333vw;
				height: 13.333333vw;
				box-sizing: border-box;
				border-radius: 100%;
				background-color: #3190e8;
				border: 1.333333vw solid #444;
				box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
				.count-num {
					position: absolute;
					right: -1.2vw;
					top: -1.333333vw;
					line-height: 1;
					background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
					color: #fff;
					border-radius: 3.2vw;
					padding: 0.533333vw 1.333333vw;
					font-size: 20rpx;
				}
			}

			.select-img:before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: url('/static/images/shop/shopcart_select.svg') 50% no-repeat;
				background-size: 0.6rem;
				background-size: 6vw;
				content: '';
			}
			.select-goods {
				flex: 1;
				color: #999;
				.item {
					font-size: 26rpx;
					line-height: normal;
				}
				.select {
					font-size: 36rpx;
					color: #fff;
				}
				.send-money {
					font-size: 20rpx;
				}
			}
			.end {
				background-color: #535356;
				height: 100%;
				width: 28vw;
				color: #fff;
				text-align: center;
				text-decoration: none;
				font-size: 30rpx;
				font-weight: 700;
				user-select: none;
				line-height: 12.8vw;
				word-break: keep-all;
				.buy {
					height: 100%;
					width: 28vw;
					background-color: #38ca73;
					color: #fff;
					text-align: center;
					text-decoration: none;
					font-size: 30rpx;
					font-weight: 700;
					user-select: none;
					line-height: 12.8vw;
					word-break: keep-all;
				}
			}
		}
	}
}
</style>
