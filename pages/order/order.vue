<template>
	<view class="container">
		<view class="order-container">
		    <view class="nologin">
		        <image class="img" src="/static/images/home/elm.png"></image>
		        <view class="title">登录后查看外卖订单</view>
		        <van-button type="primary" size="small">立即登录</van-button>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
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
</style>
