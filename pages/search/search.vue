<template>
	<view class="container">
		<view class="search-container">
			<view class="img"><image src="/static/images/search/search.png" class="search_img"></image></view>
			<input class="input" type="text" v-model="search" placeholder="输入商家、商品名称" />
			<text class="btn" @click="find">搜索</text>
		</view>

		<view class="hot-container" v-if="isHistoryData">
			<text class="hot-search">历史搜索</text>
			<image @click="del" class="del" src="/static/images/search/delete.png" mode=""></image>
			<view class="hot-data">
				<view class="item" v-for="item in historyData" :key="item">{{ item }}</view>
			</view>
		</view>
		<view class="hot-container">
			<text class="hot-search">热门搜索</text>
			<view class="hot-data">
				<view class="item" v-for="item in hotData" :key="item">{{ item }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			hotData: ['小笼包', '馄饨', '煎饼果子', '豆浆', '煎饼', '肠粉', '幸福西饼', '麦当劳', '面包', '汤粉'],
			historyData: [],
			isHistoryData: false
		};
	},
	methods: {
		find(e) {
			console.log(this.search);
			let his = JSON.parse(localStorage.getItem('historyData')) || [];
			!his.includes(this.search) && his.push(this.search) && localStorage.setItem('historyData', JSON.stringify(his));
			this.historyData = his;
			if (this.historyData.length > 0 && !this.isHistoryData) {
				this.isHistoryData = true;
			}
		},
		del(){
			localStorage.removeItem("historyData");
			this.historyData = [];
			this.isHistoryData = false;
		}
	},
	created() {
		let his = JSON.parse(localStorage.getItem('historyData')) || [];
		this.historyData = his;
		if (this.historyData.length > 0) {
			this.isHistoryData = true;
		}
	},
	watch: {
		search(curVal, oldVal) {
			// console.log(curVal, oldVal);
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	background-color: #ffffff;
	.search-container {
		display: flex;
		position: relative;
		justify-content: space-around;
		align-items: center;
		margin: 22rpx;
		.img {
			position: absolute;
			width: 22rpx;
			height: 22rpx;
			top: 4rpx;
			left: 28rpx;
			.search_img {
				width: 100%;
				height: 100%;
			}
		}
		.input {
			background-color: #f8f8f8;
			padding-left: 60rpx;
			font-size: 26rpx;
			width: 550rpx;
			height: 57rpx;
		}
		.btn {
			// width: 64rpx;
			height: 57rpx;
			line-height: 57rpx;
			font-weight: 700;
		}
	}
	.hot-container {
		position: relative;
		margin: 25rpx;
		margin-top: 50rpx;
		.del{
			position: absolute;
			width: 3.2vw;
			height: 3.2vw;
			top: 16rpx;
			right: 14rpx;
		}
		.hot-search {
			width: 64rpx;
			height: 57rpx;
			line-height: 57rpx;
			font-weight: 600;
		}
		.hot-data {
			display: flex;
			flex-wrap: wrap;
			margin-top: 8rpx;
			.item {
				font-size: 28rpx;
				margin-right: 3.333333vw;
				margin-top: 3.333333vw;
				color: #666;
				background-color: #f7f7f7;
				padding: 2vw 2.666667vw;
				border-radius: 0.666667vw;
			}
		}
	}
}
</style>
