<template>
	<view class="container">
		<view class="order-container">
			<view class="nologin">
				<image class="img" src="/static/images/home/elm.png"></image>
				<view class="title">登录后查看外卖订单</view>
				<button type="primary" size="small" class="btn">立即登录</button>
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
}
</style>
