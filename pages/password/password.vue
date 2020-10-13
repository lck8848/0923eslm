<template>
	<view class="password-container">
		<p class="passwordErr" v-show="pe">旧密码错误，请重新填写</p>
		<van-cell-group>
			<van-field type="password" :value="value1" placeholder="旧密码" @change="onChange1" />
			<van-field type="password" :value="value2" placeholder="新密码" @change="onChange2" />
			<van-field type="password" :value="value3" placeholder="确认密码" :error-message="err" @change="onChange3" />
		</van-cell-group>
		<button type="default" class="btn" @click="commit">确认修改</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: '',
			err: '',
			pe: false
		};
	},
	methods: {
		updClass() {
			if (this.value1 != '' && this.value2 != '' && this.value3 != '' && this.err == "") {
				document.querySelector('.password-container .btn').classList.add('btn-select');
			}
			if (this.value1 == '' || this.value2 == '' || this.value3 == '' || this.err != "") {
				document.querySelector('.password-container .btn').classList.remove('btn-select');
			}
		},
		onChange1(event) {
			this.value1 = event.detail;
			this.updClass();
		}, 
		onChange2(event) {
			this.value2 = event.detail;
			if (this.value2 != this.value3) {
				this.err = '两次密码输入不一致';
			} else {
				this.err = '';
			}
				this.updClass();
		},
		onChange3(event) {
			// event.detail 为当前输入的值
			this.value3 = event.detail;

			if (this.value2 != this.value3) {
				this.err = '两次密码输入不一致';
			} else {
				this.err = '';
			}
				this.updClass();
		},
		commit() {
			console.log(this.value);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f5f5f5;
}
.password-container {
	.passwordErr {
		color: #ea3106;
		background-color: #fffeea;
		border-bottom: 1px solid #ddd;
		font-size: 30rpx;
		padding: 2.666667vw;
		font-weight: 400;
	}
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
		background-color: #3199e8;
	}
}
</style>
