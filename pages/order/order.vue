<template>
	<view class="container">
		<view class="order-container" v-if="false">
			<view class="nologin">
				<image class="img" src="/static/images/home/elm.png"></image>
				<view class="title">登录后查看外卖订单</view>
				<navigator url="/pages/login/login" hover-class="none"><button type="primary" size="small" class="btn">立即登录</button></navigator>
			</view>
		</view>
		<view class="order-list">
			<view class="top">
				<view class="m_img">
					<image class="img" src="https://cube.elemecdn.com/9/dc/249e79e8bc72a8b7f67423f02282apng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed " mode=""></image>
				</view>
				<view class="desc">
					<view class="left">
						<view class="title">
							至圣炸鸡汉堡111111111111115555555555555555555555555555555555
						</view>
						<view class="time">
							2020-08-22 17:50
						</view>
					</view>
					<view class="right">
						已送达
					</view>
				</view>
			</view>
			<view class="division">
				
			</view>
			<view class="center">
				
					<view class="left">
						充电饱套餐9999999999999999999999999999999999
					</view>
					
					<view class="right">
						￥21.41
					</view>
					
			</view>
			<view class="division">
				
			</view>
			<view class="footer">
				<button class="btn" type="primary" plain="true" size="mini">再来一单</button>
			</view>
		</view>
		<view class="order-list">
			<view class="top">
				<view class="m_img">
					<image class="img" src="https://cube.elemecdn.com/9/dc/249e79e8bc72a8b7f67423f02282apng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed " mode=""></image>
				</view>
				<view class="desc">
					<view class="left">
						<view class="title">
							至圣炸鸡汉堡111111111111115555555555555555555555555555555555
						</view>
						<view class="time">
							2020-08-22 17:50
						</view>
					</view>
					<view class="right">
						已送达
					</view>
				</view>
			</view>
			<view class="division">
				
			</view>
			<view class="center">
				
					<view class="left">
						充电饱套餐9999999999999999999999999999999999
					</view>
					
					<view class="right">
						￥21.41
					</view>
					
			</view>
			<view class="division">
				
			</view>
			<view class="footer">
				<button class="btn" type="primary" plain="true" size="mini">再来一单</button>
			</view>
		</view>
		<view class="order-list">
			<view class="top">
				<view class="m_img">
					<image class="img" src="https://cube.elemecdn.com/9/dc/249e79e8bc72a8b7f67423f02282apng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed " mode=""></image>
				</view>
				<view class="desc">
					<view class="left">
						<view class="title">
							至圣炸鸡汉堡111111111111115555555555555555555555555555555555
						</view>
						<view class="time">
							2020-08-22 17:50
						</view>
					</view>
					<view class="right">
						已送达
					</view>
				</view>
			</view>
			<view class="division">
				
			</view>
			<view class="center">
				
					<view class="left">
						充电饱套餐9999999999999999999999999999999999
					</view>
					
					<view class="right">
						￥21.41
					</view>
					
			</view>
			<view class="division">
				
			</view>
			<view class="footer">
				<button class="btn" type="primary" plain="true" size="mini">再来一单</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	.container {
		background-color: #F5F5F5;
		height: 800px;
	}
	.order-list {
		background-color: #fff;
		margin-top: 20rpx;
		
		.division {
			border-top: 1px solid #e9e9e9;
		}
		.top {
			display: flex;
			align-items: center;
			height: 120rpx;
			
			.m_img {
				margin: 0rpx 30rpx;
				
				.img {
					width: 64rpx;
					height: 64rpx;
				}
			}
			
			.desc {
				flex: 1;
				display: flex;
				justify-content: space-between;
				
				.left {
					.title {
						width: 300rpx;
						font-size: 32rpx;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical
						    
					}
					.time {
						font-size: 22rpx;
						color: #999;
					}
				}
				
				.right {
					font-size: 26rpx;
					margin-right: 30rpx;
					color: #333;
				}
			}
		}
	
		.center {
				display: flex;
				justify-content: space-between;
				font-size: 26rpx;
				padding-bottom: 30rpx;
				padding-top: 30rpx;
				
				.left {
					margin-left: 135rpx;
					color: #666;
					width: 300rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical
				}
				
				.right {
					color: #333;
					margin-right: 20rpx;
				}
			
		}
	
		.footer {
			position: relative;
			height: 100rpx;
			.btn {
				position: absolute;
				right: 20rpx;
				top: 20rpx;
			}
		}
	}
	
.order-container .nologin {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 200rpx;
}

.order-container .nologin .img {
	width: 500rpx;
	height: 500rpx;
}

.order-container .nologin .btn {
	width: 240rpx;
	height: 78rpx;
	line-height: 78rpx;
	background-color: #56d176;
	color: #fff;
	font-size: 28.8rpx;
	text-align: center;
	border-radius: 6rpx;
	margin-top: 10rpx;
}
</style>
