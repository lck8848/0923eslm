<template>
	<view class="userInfo-container">
		<van-cell title="用户名" is-link value="aaa" />
		<view class="text">
			绑定账号
		</view>
		<van-cell title="手机" is-link to="index" value="131****5741" />
		<view class="text">
			安全设置
		</view>
		<van-cell title="登录密码" is-link to="index" value="修改" />
		
		<button type="default">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.userInfo-container {
		background-color: #F5F5F5;
		height: 100vh;
		
		.text {
			color: #999;
			padding: 20rpx;
			font-size: 26rpx;
		}
		button {
			margin-top: 30rpx;
			background-color: #fff;
			color: red;
		}
	}
</style>
