<template>
	<view class="container">
		<view class="login-container">
			<view class="row-container">
				<view class="login-img"><image class="img" src="/static/images/home/elm-login.png"></image></view>
				<van-cell-group>
					<input class="input" type="text" v-model="username" placeholder="用户名" />
					<input class="input" type="password" v-model="password" placeholder="密码" />
				</van-cell-group>
				<view class="text">
					新用户登录即自动注册，并表示已同意
					<text class="blue">《用户服务协议》</text>
					和
					<text class="blue">《隐私权政策》</text>
				</view>
			</view>
			<!-- <button type="primary" block>块级元素</button> -->
			<view class="btn"><button @click="login">登录</button></view>
			<view class="about">关于我们</view>
		</view>
	</view>
</template>

<script>
	import { userLogin } from '../../api/login.js'; 
export default {
	data() {
		return {
			username: '',
			password: ''
		};
	},
	methods: {
		async login() {
			console.log(this.username, this.password);
			let  username = this.username;
			let  password = this.password;
			
			if(username == '' || password == ''){
				uni.showToast({
				    title: '用户名或密码不为空',
				    duration: 1500
				});
				return;
			}
			
			let params = {username,password};
			let { code,message,userInfo } =  await userLogin(params);
			
			if(code == 200){
				// 登录成功，用户信息存入本地，然后跳转到首页
				localStorage.setItem("userInfo",JSON.stringify(userInfo));
				uni.switchTab({
				    url: `/pages/user/user`
				});
			}else {
				uni.showToast({
				    title: message,
				    duration: 1500
				});
			}
			
		}
	}
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
	padding: 0 70rpx;
}

.login-container .login-img {
	width: 276rpx;
	height: 70rpx;
	margin-bottom: 15rpx;
}

.login-container .login-img .img {
	width: 100%;
	height: 100%;
}

.login-container .text {
	font-weight: 400;
	margin-top: 36rpx;
	font-size: 28rpx;
	line-height: 40rpx;
	// padding: 0 40rpx;
	color: #999;
}
.login-container .text .blue {
	color: #00acf0;
}
.login-container .input {
	width: 580rpx;
	height: 96rpx;
	left: 0;
	padding-left: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	color: #333;
	margin-top: 20rpx;
}
.login-container .btn {
	width: 580rpx;
	margin: 0 auto;
}
.login-container .btn > button {
	display: block;
	width: 100%;
	height: 42px;
	margin-top: 30px;
	border-radius: 21px;
	background: #02b6fd;
	color: #fff;
	cursor: pointer;
	text-align: center;
	font-size: 16px;
	font-weight: 700;
	line-height: 42px;
}
.login-container .about {
	text-align: center;
	font-size: 24rpx;
	margin-top: 20px;
	color: #999;
}
</style>
