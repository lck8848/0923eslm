<template>
	<view class="container">
		<van-cell-group>
			<van-field label="联系人" :value="value1" placeholder="姓名" :border="false" @change="onChange1" />
			<van-field label="电话" :value="value2" placeholder="手机号码" :border="false" @change="onChange2" />
			<van-field label="地址" :value="value3" :readonly="true" placeholder="小区/写字楼/学校等" :border="false" @change="onChange3" @click-icon="onclick3" :is-link="true"/>
		</van-cell-group>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			value1: '',
			value2: '',
			value3: ''
		};
	},
	methods: {
		onChange1(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onChange2(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onChange3(event) {
			// event.detail 为当前输入的值
			console.log(event.detail);
		},
		onClick3(event) {
			// event.detail 为当前输入的值
			console.log(1);
			console.log(event.detail);
		}
	}
};
</script>

<style lang="scss" scoped></style>
