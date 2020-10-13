<template>
	<view class="container">
		<!--pages/user/user.wxml-->
		<view class="user-container">
			<navigator url="/pages/userInfo/userInfo" hover-class="none" v-if="userInfo">
				<view class="top" to>
					<view class="img">
						<image
							class="img"
							src="/static/images/user/into.jpeg"
						></image>
					</view>
					<view class="operation" bindtap="getLoginPage">{{userInfo.username}}</view>
					<view class="right">></view>
				</view>
			</navigator>
			<navigator url="/pages/login/login" hover-class="none" v-if="!userInfo">
				<view class="top" to>
					<view class="img">
						<image
							class="img"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
						></image>
					</view>
					<view class="operation" bindtap="getLoginPage">登录/注册</view>
					<view class="right">></view>
				</view>
			</navigator>

			<view class="mainInfo">
				<view class="left">
					<image class="img" src="/static/images/home/redpacket.png"></image>
					<view class="text">红包</view>
				</view>
				<view class="right">
					<image class="img" src="/static/images/home/gold.png"></image>
					<view class="text">金币</view>
				</view>
			</view>

			<!-- 单元格 -->
			<van-cell-group class="space">
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell1.png"></image>
							<text class="text">我的地址</text>
						</view>
					</view>
				</van-cell>
			</van-cell-group>

			<view class="mask"></view>

			<van-cell-group class="space gold">
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell2.png"></image>
							<text class="text">金币商城</text>
						</view>
					</view>
				</van-cell>
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell3.png"></image>
							<text class="text">分享拿20元现金</text>
						</view>
					</view>
				</van-cell>
			</van-cell-group>

			<view class="mask"></view>

			<van-cell-group class="space">
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell4.png"></image>
							<text class="text">我的客服</text>
						</view>
					</view>
				</van-cell>
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell5.png"></image>
							<text class="text">下载饿了么APP</text>
						</view>
					</view>
				</van-cell>
				<van-cell is-link>
					<view slot="title">
						<view class="van-cell-text">
							<image class="img" src="/static/images/home/cell6.png"></image>
							<text class="text">规则中心</text>
						</view>
					</view>
				</van-cell>
			</van-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo:""
		};
	},
	onShow: function() {
		let userInfo = JSON.parse(localStorage.getItem("userInfo"));
		this.userInfo = userInfo;
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.user-container {
	background-color: #f5f5f5;
	height: 100%;
}

.user-container .top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #008eff;
	padding: 20rpx 30rpx;
}

.user-container .top .img {
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
}

.user-container .top .img .img {
	width: 100%;
	height: 100%;
}

.user-container .top .operation {
	flex: 1;
	color: #fff;
	margin-left: 30rpx;
	font-weight: 900;
	font-size: 40rpx;
}
.user-container .mainInfo {
	margin-bottom: 20rpx;
}
.user-container .top .right {
	color: #fff;
}
.user-container .space {
	overflow: hidden;
}
.user-container .space .van-cell-text{
	line-height: 0rpx;
	transform: translateY(-8rpx);
}
.user-container .space .van-cell-text .img{
	transform: translateY(12rpx);
}
// .user-container .space .van-cell-text .text{
// 	display: inline-block;
// 	// transform: translateX(-10rpx);
// }
// .user-container .space .van-cell{
//     margin-top: 20rpx;
// 	background-color: black;
// }

// .user-container .van-cell {
//     padding: 15rpx 25rpx;
// 	font-size: 50px;
// }
.user-container .mask {
	height: 20rpx;
}
.user-container .van-cell .img {
	width: 44rpx;
	height: 44rpx;
	margin-right: 20rpx;
}

.user-container .mainInfo {
	display: flex;
	justify-content: space-around;
	background-color: #fff;
}

.user-container .mainInfo .left,
.user-container .mainInfo .right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20rpx 0;
}

.user-container .mainInfo .left .img {
	width: 44rpx;
	height: 44rpx;
}
.user-container .mainInfo .right .img {
	width: 44rpx;
	height: 44rpx;
}

.user-container .mainInfo .right .text,
.user-container .mainInfo .left .text {
	margin-top: 10rpx;
	font-size: 25rpx;
	font-weight: 900;
}
</style>
