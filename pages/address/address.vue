<template>
	<view class="addr-container">
		<view class="addrInfo">
			<view class="userInfo">
				<view class="name">
					<text class="hold">陈</text>先生 17827659145
				</view>
				<view class="addr">
					<van-tag type="success" plain>学校</van-tag>广东省旅游商务学校(深圳校区)
				</view>
			</view>
			<view class="icon">
				<van-icon name="edit" />
				<view class="nbsp">
					
				</view>
				<van-icon name="close" />
			</view>
		</view>
		<view class="addrInfo">
			<view class="userInfo">
				<view class="name">
					<text class="hold">陈</text>先生 17827659145
				</view>
				<view class="addr">
					<van-tag type="success" plain>学校</van-tag>广东省旅游商务学校(深圳校区)
				</view>
			</view>
			<view class="icon">
				<van-icon name="edit" />
				<view class="nbsp">
					
				</view>
				<van-icon name="close" />
			</view>
		</view>
		<view class="addrInfo">
			<view class="userInfo">
				<view class="name">
					<text class="hold">陈</text>先生 17827659145
				</view>
				<view class="addr">
					<van-tag type="success" plain>学校</van-tag>广东省旅游商务学校(深圳校区)
				</view>
			</view>
			<view class="icon">
				<van-icon name="edit" />
				<view class="nbsp">
					
				</view>
				<van-icon name="close" />
			</view>
		</view>
		<view class="footerBtn">
			<view class="abs">
				<van-icon name="add-o" />
			</view>
			<button type="primary" plain>新增收货地址</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			search:'search'
		};
	},
	components:{
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
	.addr-container {
		background-color: #e9e9e9;
		height: 1000px;
		.addrInfo {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10rpx;
			align-items: center;
			background-color: #fff;
			padding: 20rpx 30rpx;
			
			.userInfo {
				color: #666;
				.name {
					font-size: 35rpx;
					.hold {
						font-weight: 900;
						color: #000;
						margin-right: 10rpx;
					}
				}
				.addr {
					font-size: 28rpx;
				}
			}
			
			.icon {
				.nbsp {
					display: inline-block;
					width: 20rpx;
				}
			}
		}
		
		.footerBtn {
			position: absolute;
			width: 100%;
			bottom: 0;
			background-color: #fff;
			button {
				border: 0;
			}
			.abs {
				position: absolute;
				top: 30%;
				left: 29%;
				color: #3190E8;
			}
		}
	}
</style>
