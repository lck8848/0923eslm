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
							<text class="price">
								<small>¥</small>
								7
							</text>
							<text class="condition">
								<image src="/static/images/shop/king.png"></image>
								无门槛
							</text>
						</p>
						<p class="index-get">领取</p>
					</view>
					<view class="item color-p">
						<p class="index-dis">
							<text class="price">
								<small>¥</small>
								2
							</text>
							<text class="condition">满32可用</text>
						</p>
						<p class="index-get">领取</p>
					</view>
				</view>
				<view class="activity-tags">
					<view class="left">
						
					</view>
					<view class="right">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
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
		
		}
	}
}
</style>
