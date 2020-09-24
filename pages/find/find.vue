<template>
	<view class="container">
		<view class="parts">
			<a class="left">
				<view class="box">
					<p class="title">金币商城</p>
					<p class="desc">0元好物在这里</p>
					<image src="/static/images/find/icon1.png"></image>
				</view>
			</a>

			<a class="rightTop">
				<view class="box">
					<p class="title">推荐有奖</p>
					<p class="desc">20元现金拿不停</p>
					<image src="/static/images/find/icon2.png"></image>
				</view>
			</a>

			<a class="rightBottom">
				<view class="box">
					<p class="title">周边优惠</p>
					<p class="desc">领取口碑好劵</p>
					<image src="/static/images/find/icon3.png"></image>
				</view>
			</a>
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
	.parts {
		display: flex;
		width: 100vw;
		height: 640rpx;
		a {
			float: left;
			border: 1px solid #ededed;
			.box {
				p {
					margin: 0;
					font-weight: 400;
				}
				.title {
					font-size: 16px;
				}
				.desc {
					font-size: 12px;
					color: #999;
				}
			}
		}

		.left {
			width: 262rpx;
			height: 210rpx;
			padding: 88rpx 44rpx 24rpx 64rpx;
			.box {
				.title {
					color: rgb(255, 153, 0);
				}
				image {
					width: 20vw;
					height: 20vw;
				}
			}
		}

		.rightTop {
			.box {
				.title {
					color: rgb(27, 169, 225);
				}
				image {
					width: 12vw;
					height: 12vw;
				}
			}
		}

		.rightBottom {
			.box {
				.title {
					color: rgb(237, 102, 96);
				}
				image {
					width: 12vw;
					height: 12vw;
				}
			}
		}
	}
}
</style>
