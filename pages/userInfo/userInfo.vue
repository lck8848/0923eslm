<template>
	<view class="userInfo-container">
		<van-cell title="用户名" is-link value="aaa" @click="username"/>
		<view class="text">安全设置</view>
		<van-cell title="登录密码" is-link to="index" value="修改" @click="password" />

		<button type="default" @click="logout">退出登录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		logout() {
			localStorage.removeItem('userInfo');
			this.$router.push('/pages/user/user');
		},
		username(){
			this.$router.push('/pages/username/username');
		},
		password(){
			this.$router.push('/pages/password/password');
		}
	}
};
</script>

<style lang="scss">
.userInfo-container {
	background-color: #f5f5f5;
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
