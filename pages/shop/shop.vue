<template>
	<view class="container">
		<view class="app-dp">
			<view class="index"><view class="img"></view></view>
			<image src="/static/images/shop/header.png" mode="" class="header-img"></image>
			<view class="info">
				<view class="title"><text class="tt">港茶奶茶店·小吃·手抓饼(福安雅园店)</text></view>
				<view class="count">
					<text class="p">评价4.5</text>
					<text class="y">月售1371单</text>
					<text class="f">蜂鸟快送约40分钟</text>
				</view>
				<view class="discounts">
					<view class="item color-y">
						<p class="index-dis">
							<text class="price">¥7</text>
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
				<p class="tmryy">公告：港茶奶茶店新店入驻，期待您们的大驾光临哦！</p>
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
							<view class="item">
								<image src="/static/images/shop/item1.png" mode=""></image>
								<view class="info">
									<p class="title">特价大杯金桔柠檬茶</p>
									<p class="desc">月售164 好评率100%</p>
									<view class="buy">
										<p class="price">¥7.8</p>
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
								<dl class="item">
									<dt class="role">
										<view class="category-title">
											<strong class="category-name">优惠</strong>
											<text class="category-desc">美味优惠，抢购放宽，最多可抢5份</text>
										</view>
									</dt>
									<dd class="f_data">
										<view class="fooddetails-root">
											<text class="fooddetails-logo"><image src="/static/images/shop/item1.png"></image></text>
											<view class="fooddetails-info">
												<p class="fooddetails-name"><text class="fooddetails-nameText">大杯原味珍珠奶茶</text></p>
												<p class="fooddetails-desc">琥珀珍珠，弹牙香甜！主要原料：其他</p>
												<p class="fooddetails-sales">
													<text>月售300份</text>
													<text>好评率100%</text>
												</p>
												<view class="fooddetails-activityRow">
													<text class="foodcommon-activity">
														<text class="mini-tag"><text class="foodcommon-rateGhost">0.3折</text></text>
														<text class="mini-tag"><text class="foodcommon-rateGhost">每单限1份优惠</text></text>
													</text>
												</view>
												<text class="salesInfo-price">
													<text>¥0.5</text>
													<del>¥16</del>
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
									<dd class="f_data">
										<view class="fooddetails-root">
											<view class="fooddetails-logo"><image src="/static/images/shop/item1.png"></image></view>
											<view class="fooddetails-info">
												<p class="fooddetails-name"><text class="fooddetails-nameText">大杯原味珍珠奶茶</text></p>
												<p class="fooddetails-desc">琥珀珍珠，弹牙香甜！主要原料：其他</p>
												<p class="fooddetails-sales">
													<text>月售300份</text>
													<text>好评率100%</text>
												</p>
												<view class="fooddetails-activityRow">
													<text class="foodcommon-activity">
														<text class="mini-tag"><text class="foodcommon-rateGhost">0.3折</text></text>
														<text class="mini-tag"><text class="foodcommon-rateGhost">每单限1份优惠</text></text>
													</text>
												</view>
												<text class="salesInfo-price">
													<text>¥0.5</text>
													<del>¥16</del>
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
									<dd class="f_data">
										<view class="fooddetails-root">
											<text class="fooddetails-logo"><image src="/static/images/shop/item1.png"></image></text>
											<view class="fooddetails-info">
												<p class="fooddetails-name"><text class="fooddetails-nameText">大杯原味珍珠奶茶</text></p>
												<p class="fooddetails-desc">琥珀珍珠，弹牙香甜！主要原料：其他</p>
												<p class="fooddetails-sales">
													<text>月售300份</text>
													<text>好评率100%</text>
												</p>
												<view class="fooddetails-activityRow">
													<text class="foodcommon-activity">
														<text class="mini-tag"><text class="foodcommon-rateGhost">0.3折</text></text>
														<text class="mini-tag"><text class="foodcommon-rateGhost">每单限1份优惠</text></text>
													</text>
												</view>
												<text class="salesInfo-price">
													<text>¥0.5</text>
													<del>¥16</del>
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
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			icon: 'none',
			activeKey: 0,
			foodsData: [
				{
					id: '1',
					classify: '优惠',
					desc: '美味优惠，抢购放宽，最多可抢5份',
					img: '/static/images/shop/classify1.png',
					food: [
						{
							id: '1',
							fImg: '/static/images/shop/item1.png',
							title: '大杯原味珍珠奶茶',
							desc: '琥珀珍珠，弹牙香甜！主要原料：其他',
							sell: '300',
							good: '100',
							temp: {
								discount: '0.3',
								count: '1'
							},
							sell_price: '0.5',
							raw_price: '16',
							start: '2'
						},
						{
							id: '2',
							fImg: '/static/images/shop/item1.png',
							title: '大杯原味珍珠奶茶2',
							desc: '琥珀珍珠，弹牙香甜！主要原料：其他',
							sell: '300',
							good: '100',
							temp: {
								discount: '0.3',
								count: '1'
							},
							sell_price: '0.5',
							raw_price: '16',
							start: '2'
						}
					]
				},
				{
					id: '2',
					classify: '限时特价',
					desc: '',
					img: '/static/images/shop/classify1.png',
					food: [
						{
							id: '3',
							fImg: '/static/images/shop/item2.png',
							title: '大杯金桔柠檬椰椰茶',
							desc: '金桔柠檬+椰果主要原料：柠檬,金桔',
							sell: '18',
							good: '0.0',
							temp: {
								discount: '0.1',
								count: '1'
							},
							sell_price: '0.1',
							raw_price: '18',
							start: '2'
						},
						{
							id: '4',
							fImg: '/static/images/shop/item2.png',
							title: '大杯金桔柠檬椰椰茶',
							desc: '金桔柠檬+椰果主要原料：柠檬,金桔',
							sell: '18',
							good: '0.0',
							temp: {
								discount: '0.1',
								count: '1'
							},
							sell_price: '0.1',
							raw_price: '18',
							start: '2'
						}
					]
				},
				{
					id: '3',
					classify: '限时特价',
					desc: '',
					img: '',
					food: [
						{
							id: '5',
							fImg: '/static/images/shop/item2.png',
							title: '大杯金桔柠檬椰椰茶',
							desc: '金桔柠檬+椰果主要原料：柠檬,金桔',
							sell: '18',
							good: '0.0',
							temp: {
								discount: '0.1',
								count: '1'
							},
							sell_price: '0.1',
							raw_price: '18',
							start: '2'
						},
						{
							id: '6',
							fImg: '/static/images/shop/item2.png',
							title: '大杯金桔柠檬椰椰茶',
							desc: '金桔柠檬+椰果主要原料：柠檬,金桔',
							sell: '18',
							good: '0.0',
							temp: {
								discount: '0.1',
								count: '1'
							},
							sell_price: '0.1',
							raw_price: '18',
							start: '2'
						}
					]
				}
			]
		};
	},
	created() {},
	mounted() {},
	methods: {
		changeActive(event) {
			console.log(event.detail.index);
			this.active = event.detail.index;
		}
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
				margin: 0 auto;
				width: 500rpx;
				font-size: 41rpx;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				letter-spacing: -4rpx;
				.tt:after {
					content: '';
					border-style: solid;
					border-width: 1.466667vw 0 1.466667vw 1.733333vw;
					border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
					position: absolute;
					right: 0vw;
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
						font-size: 32rpx;
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
