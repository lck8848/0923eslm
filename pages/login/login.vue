<template>
		<!--pages/login/login.wxml-->
		<view class="login-container">
			<view class="row-container">
				<view class="login-img"><image class="img" src="static/images/login/logo.png"></image></view>
				<van-cell-group>
					<van-field :value="sms" center clearable placeholder="手机号" use-button-slot maxlength="11">
						<van-button slot="button" size="small" type="default">发送验证码</van-button>
					</van-field>
					<van-field :value="username" clearable placeholder="验证码" />
				</van-cell-group>
				<view class="text">
					新用户登录即自动注册，并表示已同意
					<text class="blue">《用户服务协议》</text>
					和
					<text class="blue">《隐私权政策》</text>
				</view>
			</view>
			<!-- <van-button type="primary" block>块级元素</van-button> -->
			<view class="btn"><van-button type="info" size="small" round block>登录</van-button></view>
		</view>
</template>

<script>
export default {
	data() {
		return { "username": "",
		 "sms":""};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
/* pages/login/login.wxss */
.login-container .row-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60rpx;
	margin-bottom: 20rpx;
}

.login-container .login-img {
	width: 200rpx;
	height: 80rpx;
	margin-bottom: 15rpx;
}

.login-container .login-img .img {
	width: 100%;
	height: 100%;
}

.login-container .text {
	margin-top: 20rpx;
	font-size: 30rpx;
	padding: 0 40rpx;
	color: #999;
}
.login-container .text .blue {
	color: #008eff;
}

.login-container .btn {
	padding: 0 180rpx;
}
</style>
