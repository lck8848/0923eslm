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
		width: 100vw;
		height: 640rpx;
		a {
			.box{
				image{
					width: 20vw;
					height: 20vw;
				}
			}
		}
		
		.left {
			.box{
				image{
					width: 20vw;
					height: 20vw;
				}
			}
		}
		
		.rightTop {
			.box{
				image{
					width: 12vw;
					height: 12vw;
				}
			}
		}
		
		.rightBottom {
			.box{
				image{
					width: 12vw;
					height: 12vw;
				}
			}
		}
	}
		
}
</style>
