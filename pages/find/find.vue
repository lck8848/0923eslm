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

			<a class="rightTop right">
				<view class="box">
					<p class="title">推荐有奖</p>
					<p class="desc">20元现金拿不停</p>
					<image src="/static/images/find/icon2.png"></image>
				</view>
			</a>

			<a class="rightBottom right">
				<view class="box">
					<p class="title">周边优惠</p>
					<p class="desc">领取口碑好劵</p>
					<image src="/static/images/find/icon3.png"></image>
				</view>
			</a>
		</view>
		<view class="activity">
			<view class="title">
				<view class="header">
					<image src="/static/images/find/line-left.png" class="left arrows"></image>
					<image src="/static/images/find/alarm.png" class="alarm"></image>
					<text class="text">限时好礼</text>
					<image src="/static/images/find/line-right.png" class="right arrows"></image>
				</view>
				<view class="footer">金币换豪礼</view>
			</view>
			<view class="content">
				<view class="item">
					
				</view>
				<view class="item">
					
				</view>
				<view class="item">
					
				</view>
			</view>
			<view class="more"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	components:{
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.container {
	background-color: #f5f5f5;
	.parts {
		width: 100vw;
		height: 320rpx;
		margin-bottom: 21rpx;
		background-color: #ffffff;
		a {
			float: left;
			box-sizing: border-box;
			border: 1px solid #ededed;
			.box {
				p {
					margin: 0;
					font-weight: 400;
				}
				.title {
					font-size: 16px;
					margin-bottom: 12rpx;
				}
				.desc {
					font-size: 12px;
					color: #999;
				}
			}
		}

		.right {
			padding: 0 30rpx;
			.box {
				position: relative;
				margin-top: 46rpx;
				p {
					margin: 0;
					font-weight: 400;
				}
				.title {
					font-size: 16px;
					margin-bottom: 12rpx;
				}
				.desc {
					font-size: 12px;
					color: #999;
				}
				image {
					position: absolute;
					width: 20vw;
					height: 20vw;
					right: 0rpx;
					bottom: -6rpx;
				}
			}
		}

		.left {
			width: 376rpx;
			height: 320rpx;
			padding: 44rpx 22rpx 12rpx 32rpx;
			border-right: none;
			.box {
				position: relative;
				.title {
					color: rgb(255, 153, 0);
				}
				image {
					position: absolute;
					width: 20vw;
					height: 20vw;
					right: 0rpx;
					bottom: -184rpx;
				}
			}
		}

		.rightTop {
			width: 375rpx;
			height: 160rpx;
			border-bottom: none;
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
			width: 375rpx;
			height: 160rpx;
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

	.activity {
		display: flex;
		justify-content: center;
		background-color: #ffffff;
		flex-wrap: wrap;
		.title {
			width: 100vw;
			text-align: center;
			margin-top: 40rpx;
			margin-bottom: 31rpx;
			.header{
				.arrows {
					width: 30rpx;
					height: 10rpx;
					margin-bottom: 10rpx;
				}
				
				.alarm {
					width: 33rpx;
					height: 33rpx;
					margin-left: 2rpx;
				}
				
				.text{
					margin: 0 8rpx;
					font-size: 18px;
					font-weight: 800;
					color: #333;
				}
			}
			
			.footer{
				margin-left: 8rpx;
				color: #999;
				font-size: 22rpx;
			}
		}
		
		.content{
			display: flex;
			width: 100vw;
			padding: 24rpx 0 30rpx 18rpx;
			.item {
				width: 222rpx;
				height: 334rpx;
				margin-left: 12rpx;
				border: 1px solid red;
				box-sizing: border-box;
			}
		}
	}
}
</style>
