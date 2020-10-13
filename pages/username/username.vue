<template>
	<view class="username-container">
		<van-cell-group><van-field :value="value" placeholder="用户名" :border="false" @change="onChange" /></van-cell-group>
		<button type="default" class="btn" @click="commit">确认修改</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		};
	},
	methods: {
		onChange(event) {
			// event.detail 为当前输入的值
			this.value = event.detail;
			if (event.detail.length != 0) {
				document.querySelector('.username-container .btn').classList.add('btn-select');
			}
			if (event.detail.length == 0) {
				document.querySelector('.username-container .btn').classList.remove('btn-select');
			}
		},
		commit(){
			console.log(this.value)
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f5f5f5;
}
.username-container {
	.btn {
		background-color: #c7c7c7;
		display: block;
		outline: none;
		color: #fff;
		height: 12.8vw;
		border: none;
		margin: 0 26rpx;
		margin-top: 52rpx;
		font-size: 38rpx;
		font-weight: 700;
		border-radius: 1.6vw;
	}
	.btn-select {
		display: block;
		outline: none;
		color: #fff;
		height: 12.8vw;
		font-size: 38rpx;
		margin: 0 26rpx;
		margin-top: 52rpx;
		font-weight: 700;
		border-radius: 1.6vw;
		background-color: #00d762;
	}
}
</style>
